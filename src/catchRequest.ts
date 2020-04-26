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
  // 请求状态
  private loading: number = 0
  // 数据
  private data: any
  // 请求返回的promise
  private promise: Promise<any>
  // 选项
  private options: Record<string, any>
  // storage
  private storage: Function
  // 时间戳
  private timestamp: number = 0

  /**
   * 构造函数
   * @param options 选项
   */
  constructor(options: CatchRequestOptions) {
    this.options = Object.assign(defaultCatchRequestOptions, options)
    if (this.options.storageMode !== 'none') {
      this.storage = getStorage(this.options.storageMode)
    }

    if (this.options.immediate) {
      this.get()
    }
  }

  /**
   * 获取数据
   * @param disableCache 是否禁用缓存
   */
  public get(disableCache: boolean = false) {
    // 禁用缓存
    if (!disableCache) {
      // 已经加载完成数据, 并且没有超时
      if (this.loading === 2 && !this.isTimeout()) {
        return Promise.resolve(this.data)
      }

      // 正在请求中
      if (this.loading === 1) {
        return this.promise
      }

      // 没有禁用存储
      if (this.options.storageMode !== 'none') {
        // 从storage中获取到数据
        const data = this.storage(this.getStorageName())

        // 存在数据
        if (data !== undefined) {
          this.timestamp = data.timestamp
          // 没有超时
          if (!this.isTimeout()) {
            this.data = data.value
            this.loading = 2
            return Promise.resolve(this.data)
          }
        }
      }
    }
    // 设置请求状态
    this.loading = 1
    // 开始请求数据
    this.promise = this.options.method().then((data: any) => {
      // 如果请求成功, 则回调成功的钩子, 主要用于数据处理
      if (isFunction(this.options.success)) {
        this.options.success(data)
      }
      this.data = data
      this.timestamp = Date.now()
      // 如果没有禁用存储, 则缓存数据
      if (this.options.storageMode !== 'none') {
        this.storage(this.getStorageName(), {
          value: this.data,
          timestamp: this.timestamp
        })
      }
      return data
    })
    return this.promise
  }

  /**
   * 判断缓存的数据有没有超时, 即: 没有设置超时, 或者没有超时
   */
  private isTimeout() {
    return this.options.timeout > 0 && Date.now() - this.timestamp > this.options.timeout
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
    if (this.storage) {
      this.storage(this.getStorageName(), null)
    }
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
