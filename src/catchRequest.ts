import { local, session, StorageName } from './storage'
import isFunction from './isFunction'
import { inBrowser } from './env'

// storage name 前缀
const STORAGE_NAME_PREFIX = 's-catch-request-'

/**
 * 组装storage name
 * @param name
 */
const getStorageName = (name: string) => {
  return STORAGE_NAME_PREFIX + name
}

/**
 * 获取storage
 * @param storageMode
 */
const getStorage = (storageMode: string) => {
  return storageMode === StorageName.local ? local : session
}

/**
 * 移除存储信息
 * @param storageMode
 */
const removeStorage = (storageMode: string = StorageName.local): void => {
  if (!inBrowser()) {
    return
  }
  // @ts-ignore
  const storage: Storage = window[storageMode + 'Storage']

  for (let name in storage) {
    if (name.indexOf(STORAGE_NAME_PREFIX) >= 0) {
      storage.removeItem(name)
    }
  }
}

/**
 * CatchRequest的选项
 */
export interface CatchRequestOptions {
  storageName: string // 存储名称
  method: Promise<any> // 请求的动作
  success?: Function
  immediate?: boolean
  storageMode?: string

  // 0表示永不超时
  timeout?: number
}

/**
 * 默认的请求参数
 */
const defaultCatchRequestOptions = {
  storageMode: StorageName.local,
  immediate: false,
  // 0表示永不超时
  timeout: 0
}

/**
 * 缓存请求
 */
export class CatchRequest {
  private loading: number = 0
  private data: any
  private promise: Promise<any>
  private options: Record<string, any>
  private storage: Function
  private timestamp: number = -1
  constructor(options: CatchRequestOptions) {
    this.options = Object.assign(defaultCatchRequestOptions, options)
    this.storage = getStorage(this.options.storageMode)

    if (this.options.immediate) {
      this.get()
    }
  }

  /**
   * 获取数据
   * @param disableCache 是否禁用缓存
   */
  public get(disableCache: boolean = false) {
    if (disableCache !== true) {
      if (
        this.loading === 2 &&
        (this.options.timeout === 0 || Date.now() - this.timestamp < this.options.timeout)
      ) {
        return Promise.resolve(this.data)
      }
      if (this.loading === 1) {
        return this.promise
      }

      const data = local(this.getStorageName())

      if (data !== undefined) {
        this.timestamp = data.timestamp
        if (this.options.timeout === 0 || Date.now() - this.timestamp < this.options.timeout) {
          this.data = data.value
          this.loading = 2
          return Promise.resolve(this.data)
        }
      }
    }
    this.loading = 1
    this.promise = this.options.method().then((data: any) => {
      if (isFunction(this.options.success)) {
        this.options.success(data)
      }
      this.data = data
      this.timestamp = Date.now()
      local(this.getStorageName(), {
        value: this.data,
        timestamp: this.timestamp
      })
      return data
    })
    return this.promise
  }

  /**
   * 获取存储名称
   */
  private getStorageName() {
    return getStorageName(this.options.storageName)
  }

  /**
   * 移除存储的信息
   */
  public remove() {
    this.storage(this.getStorageName(), null)
  }

  /**
   * 创建新的实例
   * @param options
   */
  public static create(options: CatchRequestOptions) {
    return new CatchRequest(options)
  }

  /**
   * 移除本地的缓存存储
   * @param storageName
   * @param storageMode
   */
  public static remove(storageName: string, storageMode: string = StorageName.local) {
    getStorage(storageMode)(getStorageName(storageName), null)
  }

  /**
   * 移除所有的缓存请求数据
   * @param storageMode
   */
  public static removeAll(storageMode?: string) {
    if (storageMode === undefined || storageMode === StorageName.local) {
      removeStorage(StorageName.local)
    }
    if (storageMode === undefined || storageMode === StorageName.session) {
      removeStorage(StorageName.session)
    }
  }
}

export default CatchRequest
