import { local, session, StorageName } from './storage'
import isFunction from './isFunction'
import { inBrowser } from './env'

/**
 * CatchRequest的选项
 */
export interface CatchRequestOptions {
  storageName: string
  request: Promise<any>
  success?: Function
  immediate?: boolean
  storageMode?: string
}

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
 * 默认的请求参数
 */
const defaultCatchRequestOptions = {
  storageMode: StorageName.local,
  immediate: false
}

/**
 * 缓存请求
 */
export class CatchRequest {
  private loading: number = 0
  private data: any
  private promise: Promise<any>
  private options: Record<string, any> = {}
  private storage: Function
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
      if (this.loading === 2) {
        return Promise.resolve(this.data)
      }
      if (this.loading === 1) {
        return this.promise
      }

      const data = local(this.getStorageName())

      if (data !== undefined) {
        this.data = data
        this.loading = 2
        return Promise.resolve(this.data)
      }
    }
    this.loading = 1
    this.promise = this.options.request().then((data: any) => {
      if (isFunction(this.options.success)) {
        this.options.success(data)
      }
      this.data = data
      local(this.getStorageName(), this.data)
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
