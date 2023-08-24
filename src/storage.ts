import globalThis from './globalThis'

/**
 * 自定义存储类
 */
class CustomStorage {
  private storage: Storage
  private key: string
  constructor(name: string, key: string = 'v') {
    this.storage = globalThis[`${name}Storage`]
    this.key = key
  }

  /**
   * 获取存储内容
   * @param key
   */
  get(key: string) {
    let result: any
    try {
      result = JSON.parse(this.storage?.getItem(key))?.[this.key]
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
  set(key: string, value: any) {
    try {
      this.storage?.setItem(key, JSON.stringify({ [this.key]: value }))
    } catch (e) {
      throw new Error(e)
    }
  }

  /**
   * 移除存储值
   * @param key
   */
  remove(key: string) {
    this.storage?.removeItem(key)
  }

  /**
   * 清空所有存储
   */
  clear() {
    this.storage?.clear()
  }
}

export const localCustomStorage = new CustomStorage('local')

export const sessionCustomStorage = new CustomStorage('session')

/**
 * 存储
 * @param customStorage
 */
const storage = (
  customStorage: CustomStorage,
): {
  (name: string): any
  (name: string, value: null): void
  (name: string, value: any): void
} => {
  return (name: string, value?: any) => {
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
