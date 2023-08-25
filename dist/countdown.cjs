'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const globalThis = require('./globalThis.cjs');
const isFunction = require('./isFunction.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const DEFAULT_OPTIONS = {
  delay: 1e3,
  decrement: 1,
  autostart: true,
  end: 0
};
class Countdown {
  // 倒计时的值
  value;
  // 倒计时计时器ID
  intervalId;
  // 选项
  options;
  // 回调队列
  callbackQueues = {};
  constructor(value, options) {
    if (isFunction.isFunction(options)) {
      this.on("change", options);
    }
    this.options = Object.assign({ ...DEFAULT_OPTIONS }, options, typeof value === "number" ? { value } : value);
    this.value = this.options.value;
    if (this.options.autostart) {
      this.start();
    }
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
    this.intervalId = globalThis.default.setInterval(this.decrease.bind(this), this.options.delay);
  }
  // 清除倒计时
  clear() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
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
  /**
   * 创建倒计时实例
   * @param value 倒计时
   * @param options 选项
   */
  static create(value, options) {
    return new Countdown(value, options);
  }
}
const countdown = Countdown.create;

exports.countdown = countdown;
exports.default = countdown;
