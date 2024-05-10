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
const publishSubscribe = require("./publishSubscribe.cjs");
const noop = require("./noop.cjs");
const DEFAULT_OPTIONS = {
  value: 0,
  change: noop.noop,
  immediate: true,
  delay: 1e3,
  decrement: 1,
  autostart: true,
  end: 0
};
class Countdown extends publishSubscribe.PublishSubscribe {
  constructor(options) {
    super();
    // 倒计时的值
    __publicField(this, "value", 0);
    // 倒计时计时器ID
    __publicField(this, "intervalId", 0);
    // 选项
    __publicField(this, "options");
    if (isFunction.isFunction(options.change)) {
      this.on("change", options.change);
    }
    this.options = Object.assign({ ...DEFAULT_OPTIONS }, options);
    this.value = this.options.value;
    if (this.options.autostart) {
      this.start();
    }
  }
  static create(timer, options) {
    const innerOptions = {};
    if (typeof timer === "number") {
      innerOptions.value = timer;
    } else if (isObject.isObject(timer)) {
      Object.assign(innerOptions, timer);
    }
    if (isFunction.isFunction(options)) {
      innerOptions.change = options;
    } else if (isObject.isObject(options)) {
      Object.assign(innerOptions, options);
    }
    return new Countdown(innerOptions);
  }
  // 开始
  start() {
    if (this.options.value > this.value) {
      return;
    }
    this.loop();
    this.emit("start");
    if (this.options.immediate) {
      this.emit("change");
    }
  }
  // 停止
  stop() {
    if (this.intervalId === 0) {
      return;
    }
    this.clear();
    this.emit("stop");
  }
  // 继续
  continue() {
    if (this.intervalId !== 0) {
      return;
    }
    this.loop();
    this.emit("continue");
  }
  // 倒计时
  decrease() {
    this.value = this.value - this.options.decrement;
    if (this.value <= this.options.end) {
      clearInterval(this.intervalId);
      this.emit("finish");
    }
    this.emit("change");
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
