import { local as n } from "./local.js";
import { session as h } from "./session.js";
import { isFunction as l } from "./isFunction.js";
import { inBrowser as p } from "./env.js";
import g from "./globalThis.js";
import "./storage.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const r = "s-catch-request-", o = (s) => r + s, e = (s) => s === "local" ? n : h, a = (s = "local") => {
  if (!p())
    return;
  const t = g[s + "Storage"];
  for (let i in t)
    i.indexOf(r) >= 0 && t.removeItem(i);
}, c = {
  storageMode: "local",
  immediate: !1,
  // 0表示永不超时
  timeout: 0
};
class m {
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
  constructor(t) {
    this.loading = 0, this.timestamp = 0, this.options = Object.assign(c, t), this.options.storageMode !== "none" && (this.storage = e(this.options.storageMode)), this.options.immediate && this.get();
  }
  /**
   * 获取数据
   * @param disableCache 是否禁用缓存
   */
  get(t = !1) {
    if (!t) {
      if (this.loading === 2 && !this.isTimeout())
        return Promise.resolve(this.data);
      if (this.loading === 1)
        return this.promise;
      if (this.options.storageMode !== "none") {
        const i = this.storage(this.getStorageName());
        if (i !== void 0 && (this.timestamp = i.timestamp, !this.isTimeout()))
          return this.data = i.value, this.loading = 2, Promise.resolve(this.data);
      }
    }
    return this.loading = 1, this.promise = this.options.method().then((i) => (l(this.options.success) && this.options.success(i), this.data = i, this.timestamp = Date.now(), this.options.storageMode !== "none" && this.storage(this.getStorageName(), {
      value: this.data,
      timestamp: this.timestamp
    }), i)), this.promise;
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
    return o(this.options.storageName);
  }
  /**
   * 移除存储的信息
   */
  remove() {
    this.storage && this.storage(this.getStorageName(), null);
  }
  /**
   * 创建新的实例
   * @param options
   */
  static create(t) {
    return new m(t);
  }
  /**
   * 移除本地的缓存存储
   * @param storageName
   * @param storageMode
   */
  static remove(t, i = "local") {
    e(i)(o(t), null);
  }
  /**
   * 移除所有的缓存请求数据
   * @param storageMode
   */
  static removeAll(t) {
    (t === void 0 || t === "local") && a("local"), (t === void 0 || t === "session") && a("session");
  }
}
export {
  m as CacheRequest,
  m as default
};
