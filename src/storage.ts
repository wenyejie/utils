/**
 * 自定义存储
 */
class CustomStorage {
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
   * @param key key
   * @param value value
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
}

/**
 * 存储
 * @param storage 存储
 * @param key key
 */
export const storage = (storage: Storage, key?: string): StorageFn => {
  const instance = new CustomStorage(storage, key)
  return (name: string, value?: any) => {
    if (!name) {
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

export default storage
