import { inBrowser } from './env'
import emptyObject from './emptyObject'
import globalThis from './globalThis'

/**
 * 解析
 * @param data
 */
const parse = (data:string) => {
  return (JSON.parse(data) || emptyObject).v
}

/**
 * 自定义存储类
 */
class CustomStorage {
  private storage: Storage
  constructor(name:string) {
    this.storage = inBrowser() ? globalThis[`${name}Storage`] : emptyObject
  }

  /**
   * 获取存储内容
   * @param key
   */
  get(key:string) {
    let result:any
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
  set(key:string, value: any) {
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
  remove(key:string) {
    this.storage.removeItem(key)
  }

  /**
   * 清空所有存储
   */
  clear() {
    this.storage.clear()
  }

  /**
   * 返回第index个存储的内容, index从0开始
   * @param index
   */
  key(index:number) {
    return parse(this.storage.key(index))
  }

  /**
   * 返回存储内容长度
   */
  length() {
    return this.storage.length
  }
}

export const localCustomStorage = new CustomStorage('local')

export const sessionCustomStorage = new CustomStorage('session')

export type StorageMethod = {
  (name: string): any
  (name: string, value: null): void
  (name: string, value: any): void
}

/**
 * 存储
 * @param customStorage
 */
const storage = (customStorage:CustomStorage) => {
  return ((name: string, value: any) => {
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
  }) as StorageMethod
}

/**
 * 实例化封装sessionStorage
 */
export const session = storage(sessionCustomStorage)
/**
 * 实例化封装localStorage
 */
export const local = storage(localCustomStorage)
