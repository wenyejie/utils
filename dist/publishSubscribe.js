var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { isFunction } from "./isFunction.js";
import { arrDelItemByProp } from "./arrDelItemByProp.js";
class PublishSubscribe {
  constructor() {
    __publicField(this, "callbackMap", {});
  }
  static create() {
    return new PublishSubscribe();
  }
  /**
   * 触发订阅
   * @param eventName 事件名称
   * @param data 数据
   */
  trigger(eventName, data) {
    if (!eventName) {
      return;
    }
    const item = this.callbackMap[eventName] ?? { queue: [] };
    const { queue } = item;
    item.data = data;
    if (queue.length === 0) {
      this.callbackMap[eventName] = item;
      return;
    }
    queue.forEach(({ callback }) => callback(data));
    item.queue = queue.filter(({ once }) => !once);
    this.callbackMap[eventName] = item;
  }
  /**
   * 订阅事件
   * @param eventName 事件名称
   * @param callback 回调
   * @param options 选项
   */
  on(eventName, callback, options) {
    if (!eventName || !isFunction(callback())) {
      return;
    }
    const item = this.callbackMap[eventName] ?? { queue: [] };
    const { data, queue } = item;
    if (options == null ? void 0 : options.immediate) {
      callback(data);
    }
    queue.push({
      once: (options == null ? void 0 : options.once) ?? false,
      callback
    });
    this.callbackMap[eventName] = item;
  }
  /**
   * 移除订阅/频道
   * @param eventName 事件名称
   * @param callback 回调
   */
  off(eventName, callback) {
    if (!eventName) {
      return;
    }
    const item = this.callbackMap[eventName];
    if (!item) {
      return;
    }
    const { queue } = item;
    if (isFunction(callback)) {
      arrDelItemByProp(queue, "callback", callback);
    } else {
      delete this.callbackMap[eventName];
    }
  }
}
export {
  PublishSubscribe
};
