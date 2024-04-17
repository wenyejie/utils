"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const isFunction = require("./isFunction.cjs");
const isObject = require("./isObject.cjs");
const DEFAULT_OPTIONS = {
  delay: 1e3,
  decrement: 1,
  autostart: true,
  end: 0
};
class Countdown {
  constructor(options) {
    // 倒计时的值
    __publicField(this, "value");
    // 倒计时计时器ID
    __publicField(this, "intervalId");
    // 选项
    __publicField(this, "options");
    // 回调队列
    __publicField(this, "callbackQueues", {});
    if (isFunction.isFunction(options.change)) {
      this.on("change", options.change);
    }
    this.options = Object.assign({ ...DEFAULT_OPTIONS }, options);
    this.value = this.options.value;
    if (this.options.autostart) {
      this.start();
    }
  }
  static create(value, options) {
    const innerOptions = {};
    if (typeof value === "number") {
      innerOptions.value = value;
    } else if (isObject.isObject(value)) {
      Object.assign(innerOptions, value);
    }
    if (isFunction.isFunction(options)) {
      innerOptions.change = options;
    } else if (isObject.isObject(options)) {
      Object.assign(innerOptions, options);
    }
    return new Countdown(innerOptions);
  }
  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback // 事件回调
   */
  on(eventName, callback) {
    const queue = this.callbackQueues[eventName] ?? [];
    queue.push(callback);
    this.callbackQueues[eventName] = queue;
  }
  /**
   * 触发事件
   * @param eventName 事件名称
   */
  trigger(eventName) {
    const queue = this.callbackQueues[eventName];
    if (!Array.isArray(queue)) {
      return;
    }
    queue.forEach((cb) => cb.call(this, this.value));
  }
  // 开始
  start() {
    if (this.options.value > this.value) {
      return;
    }
    this.loop();
    this.trigger("start");
  }
  // 停止
  stop() {
    if (this.intervalId === 0) {
      return;
    }
    this.clear();
    this.trigger("stop");
  }
  // 继续
  continue() {
    if (this.intervalId !== 0) {
      return;
    }
    this.loop();
    this.trigger("continue");
  }
  // 倒计时
  decrease() {
    this.value = this.value - this.options.decrement;
    if (this.value <= this.options.end) {
      clearInterval(this.intervalId);
      this.trigger("finish");
    }
    this.trigger("change");
  }
  // 循环
  loop() {
    this.clear();
    this.intervalId = globalThis.globalThis.setInterval(this.decrease.bind(this), this.options.delay);
  }
  // 清除倒计时
  clear() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
}
const countdown = Countdown.create;
exports.countdown = countdown;
