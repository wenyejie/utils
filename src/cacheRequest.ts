import { local, session } from './storage'
import isFunction from './isFunction'
import { inBrowser } from './env'
import globalThis from './globalThis'

// storage name 前缀
const STORAGE_NAME_PREFIX = 's-catch-request-'

export type StorageMode = 'local' | 'session'

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
const getStorage = (storageMode: StorageMode) => {
  return storageMode === 'local' ? local : session
}

/**
 * 移除存储信息
 * @param storageMode
 */
const removeStorage = (storageMode = 'local') => {
  if (!inBrowser()) {
    return
  }

  const storage = globalThis[storageMode + 'Storage']

  for (let name in storage) {
    if (name.indexOf(STORAGE_NAME_PREFIX) >= 0) {
      storage.removeItem(name)
    }
  }
}

/**
 * 默认的请求参数
 */
const defaultCatchRequestOptions = {
  storageMode: 'local',
  immediate: false,
  // 0表示永不超时
  timeout: 0
}

/**
 * 缓存请求
 */
export class CacheRequest {
  private loading: number
  private timestamp: number
  private options: any
  private readonly storage: any
  private data: number
  private promise: Promise<any>
  /**
   * 构造函数
   * @param options 选项
   */
  constructor(options) {
    // 请求状态
    this.loading = 0
    // 时间戳
    this.timestamp = 0

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
  get(disableCache = false) {
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
    this.promise = this.options.method().then((data) => {
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
          timestamp: this.timestamp,
        })
      }
      return data
    })
    return this.promise
  }

  /**
   * 判断缓存的数据有没有超时, 即: 没有设置超时, 或者没有超时
   */
  isTimeout() {
    return this.options.timeout > 0 && Date.now() - this.timestamp > this.options.timeout
  }

  /**
   * 获取存储名称
   */
  getStorageName() {
    return getStorageName(this.options.storageName)
  }

  /**
   * 移除存储的信息
   */
  remove() {
    if (this.storage) {
      this.storage(this.getStorageName(), null)
    }
  }

  /**
   * 创建新的实例
   * @param options
   */
  static create(options) {
    return new CacheRequest(options)
  }

  /**
   * 移除本地的缓存存储
   * @param storageName
   * @param storageMode
   */
  static remove(storageName: string, storageMode: StorageMode = 'local') {
    getStorage(storageMode)(getStorageName(storageName), null)
  }

  /**
   * 移除所有的缓存请求数据
   * @param storageMode
   */
  static removeAll(storageMode: StorageMode) {
    if (storageMode === undefined || storageMode === 'local') {
      removeStorage('local')
    }
    if (storageMode === undefined || storageMode === 'session') {
      removeStorage('session')
    }
  }
}

export default CacheRequest
