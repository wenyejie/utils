var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _messages, _options;
import { isString } from "./isString.js";
import { isFunction } from "./isFunction.js";
import { normalizeOptions } from "./normalizeOptions.js";
var PublishSubscribeType = /* @__PURE__ */ ((PublishSubscribeType2) => {
  PublishSubscribeType2["ON"] = "on";
  PublishSubscribeType2["ONCE"] = "once";
  return PublishSubscribeType2;
})(PublishSubscribeType || {});
const PublishSubscribeDefaultOptions = {
  cache: false
  // 缓存
};
const PublishSubscribeOnDefaultOptions = {
  type: "on",
  // 类型
  immediate: false
  // 是否立即执行
};
class PublishSubscribe {
  constructor(options) {
    __privateAdd(this, _messages, /* @__PURE__ */ new Map());
    __privateAdd(this, _options, {});
    __privateSet(this, _options, normalizeOptions(options, PublishSubscribeDefaultOptions));
  }
  /**
   * 监听事件
   * @param name 事件名称
   * @param callback 事件回调
   * @param options 事件选项
   */
  on(name, callback, options) {
    if (!isString(name)) {
      console.warn("The parameter `name` must be a string:", name);
      return;
    }
    if (!isFunction(callback)) {
      console.warn("The parameter `callback` must be a function:", callback);
      return;
    }
    const {
      type,
      immediate
    } = normalizeOptions(options, PublishSubscribeOnDefaultOptions);
    if (!__privateGet(this, _messages).has(name)) {
      __privateGet(this, _messages).set(name, { queues: [] });
    }
    const message = __privateGet(this, _messages).get(name);
    const { result, queues } = message;
    if (queues.find((item) => item.callback === callback)) {
      console.log(`The callback: ${callback} already exists under name: ${name}`);
      return;
    }
    queues.push({
      type,
      callback
    });
    if (immediate && (result == null ? void 0 : result.length) > 0) {
      callback(...result);
    }
  }
  /**
   * 监听
   * @param name
   * @param callback
   * @param immediate
   */
  once(name, callback, immediate = false) {
    this.on(name, callback, { type: "once", immediate });
  }
  /**
   * 解除订阅
   * @param name
   * @param callback
   */
  off(name, callback) {
    if (name === null) {
      __privateGet(this, _messages).clear();
      return;
    }
    if (!__privateGet(this, _messages).has(name)) {
      console.warn("No callback for this event `name`:", name);
      return;
    }
    if (callback === null) {
      __privateGet(this, _messages).delete(name);
      return;
    }
    if (!isFunction(callback)) {
      console.warn("The parameter `callback` must be a function:", callback);
      return;
    }
    const message = __privateGet(this, _messages).get(name);
    message.queues = message.queues.filter((item) => item.callback !== callback);
  }
  /**
   * 触发事件
   * @param name
   * @param args
   */
  emit(name, ...args) {
    if (!isString(name)) {
      console.warn("The parameter `name` must be a string:", name);
      return;
    }
    const message = __privateGet(this, _messages).get(name) ?? { queues: [] };
    const { queues } = message;
    if (queues.length > 0) {
      queues.forEach(({ callback }) => callback(...args));
      message.queues = queues.filter(({ type }) => type !== "once");
    } else {
      console.warn("No callback for this event `name`:", name);
    }
    if (__privateGet(this, _options).cache) {
      message.result = args;
    }
    __privateGet(this, _messages).set(name, message);
  }
}
_messages = new WeakMap();
_options = new WeakMap();
export {
  PublishSubscribe,
  PublishSubscribeType
};
