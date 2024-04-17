export type StorageValue = string | number | undefined | null | Record<string, unknown> | unknown[]

/**
 * 自定义存储
 */
class CustomStorage<K extends string, V> {
  private readonly storage: Storage
  private readonly key: string

  constructor(storage: Storage, key: string = 'v') {
    this.storage = storage
    this.key = key
  }

  /**
   * 获取存储内容
   * @param key 保存key
   */
  get(key: K) {
    let result: V
    try {
      result = JSON.parse(this.storage?.getItem(key))?.[this.key]
    } catch (e) {
      throw new Error(e)
    }
    return result
  }

  /**
   * 保存键值到存储空间
   * @param key key
   * @param value value
   */
  set(key: K, value: V) {
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
  remove(key: K) {
    this.storage?.removeItem(key)
  }
}

export type StorageFn = {
  <K extends string, V>(name: K): V
  <K extends string, V extends null>(name: K, value: V): void
  <K extends string, V>(name: K, value: V): void
}

/**
 * 存储
 * @param storage 存储
 * @param key key
 */
export const storage = (storage: Storage, key?: string): StorageFn => {
  const instance = new CustomStorage(storage, key)
  return (name: string, value?: unknown) => {
    if (!name) {
      console.error(`"${name}" is required`)
      return
    }
    switch (value) {
      case undefined:
        return instance.get(name)
      case null:
        instance.remove(name)
        break
      default:
        instance.set(name, value)
        break
    }
  }
}

