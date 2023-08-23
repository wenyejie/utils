'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const storage = require('./storage.cjs');
const isFunction = require('./isFunction.cjs');
const env = require('./env.cjs');
const globalThis = require('./globalThis.cjs');
require('./emptyObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const STORAGE_NAME_PREFIX = "s-catch-request-";
const getStorageName = (name) => {
  return STORAGE_NAME_PREFIX + name;
};
const getStorage = (storageMode) => {
  return storageMode === "local" ? storage.local : storage.session;
};
const removeStorage = (storageMode = "local") => {
  if (!env.inBrowser()) {
    return;
  }
  const storage = globalThis.default[storageMode + "Storage"];
  for (let name in storage) {
    if (name.indexOf(STORAGE_NAME_PREFIX) >= 0) {
      storage.removeItem(name);
    }
  }
};
const defaultCatchRequestOptions = {
  storageMode: "local",
  immediate: false,
  // 0表示永不超时
  timeout: 0
};
class CacheRequest {
  loading;
  timestamp;
  options;
  storage;
  data;
  promise;
  /**
   * 构造函数
   * @param options 选项
   */
  constructor(options) {
    this.loading = 0;
    this.timestamp = 0;
    this.options = Object.assign(defaultCatchRequestOptions, options);
    if (this.options.storageMode !== "none") {
      this.storage = getStorage(this.options.storageMode);
    }
    if (this.options.immediate) {
      this.get();
    }
  }
  /**
   * 获取数据
   * @param disableCache 是否禁用缓存
   */
  get(disableCache = false) {
    if (!disableCache) {
      if (this.loading === 2 && !this.isTimeout()) {
        return Promise.resolve(this.data);
      }
      if (this.loading === 1) {
        return this.promise;
      }
      if (this.options.storageMode !== "none") {
        const data = this.storage(this.getStorageName());
        if (data !== void 0) {
          this.timestamp = data.timestamp;
          if (!this.isTimeout()) {
            this.data = data.value;
            this.loading = 2;
            return Promise.resolve(this.data);
          }
        }
      }
    }
    this.loading = 1;
    this.promise = this.options.method().then((data) => {
      if (isFunction.isFunction(this.options.success)) {
        this.options.success(data);
      }
      this.data = data;
      this.timestamp = Date.now();
      if (this.options.storageMode !== "none") {
        this.storage(this.getStorageName(), {
          value: this.data,
          timestamp: this.timestamp
        });
      }
      return data;
    });
    return this.promise;
  }
  /**
   * 判断缓存的数据有没有超时, 即: 没有设置超时, 或者没有超时
   */
  isTimeout() {
    return this.options.timeout > 0 && Date.now() - this.timestamp > this.options.timeout;
  }
  /**
   * 获取存储名称
   */
  getStorageName() {
    return getStorageName(this.options.storageName);
  }
  /**
   * 移除存储的信息
   */
  remove() {
    if (this.storage) {
      this.storage(this.getStorageName(), null);
    }
  }
  /**
   * 创建新的实例
   * @param options
   */
  static create(options) {
    return new CacheRequest(options);
  }
  /**
   * 移除本地的缓存存储
   * @param storageName
   * @param storageMode
   */
  static remove(storageName, storageMode = "local") {
    getStorage(storageMode)(getStorageName(storageName), null);
  }
  /**
   * 移除所有的缓存请求数据
   * @param storageMode
   */
  static removeAll(storageMode) {
    if (storageMode === void 0 || storageMode === "local") {
      removeStorage("local");
    }
    if (storageMode === void 0 || storageMode === "session") {
      removeStorage("session");
    }
  }
}

exports.CacheRequest = CacheRequest;
exports.default = CacheRequest;
