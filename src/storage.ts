import { inBrowser } from './env'
import emptyObject from './emptyObject'

enum StorageName {
  local = 'local',
  session = 'session'
}
/**
 * 解析
 * @param data
 */
const parse = (data: any): any => {
  return (JSON.parse(data) || emptyObject).v
}

/**
 * 自定义存储类
 */
class CustomStorage {
  private storage: Storage
  constructor(name: StorageName) {
    // @ts-ignore
    this.storage = inBrowser() ? window[`${name}Storage`] : emptyObject
  }

  /**
   * 获取存储内容
   * @param key
   */
  get(key: string): any {
    let result
    try {
      result = parse(this.storage.getItem(key))
    } catch (e) {
      throw new Error(e)
    }
    return result
  }

  /**
   * 保存键值到存储空间
   * @param key
   * @param value
   */
  set(key: string, value: any): void {
    try {
      this.storage.setItem(key, JSON.stringify({ v: value }))
    } catch (e) {
      throw new Error(e)
    }
  }

  /**
   * 移除存储值
   * @param key
   */
  remove(key: string): void {
    this.storage.removeItem(key)
  }

  /**
   * 清空所有存储
   */
  clear(): void {
    this.storage.clear()
  }

  /**
   * 返回第index个存储的内容, index从0开始
   * @param index
   */
  key(index: number) {
    return parse(this.storage.key(index))
  }

  /**
   * 返回存储内容长度
   */
  length() {
    return this.storage.length
  }
}

export const localCustomStorage: CustomStorage = new CustomStorage(StorageName.local)

export const sessionCustomStorage: CustomStorage = new CustomStorage(StorageName.session)

const storage = (customStorage: CustomStorage): Function => {
  return (name: string, value: any) => {
    if (!name) {
      return
    }
    switch (value) {
      case undefined:
        return customStorage.get(name)
      case null:
        customStorage.remove(name)
        break
      default:
        customStorage.set(name, value)
        break
    }
  }
}

/**
 * 实例化封装sessionStorage
 */
export const session = storage(sessionCustomStorage)
/**
 * 实例化封装localStorage
 */
export const local = storage(localCustomStorage)
