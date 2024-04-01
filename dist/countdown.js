import n from "./globalThis.js";
import { isFunction as r } from "./isFunction.js";
import { isObject as a } from "./isObject.js";
const h = {
  delay: 1e3,
  decrement: 1,
  autostart: !0,
  end: 0
};
class s {
  // 倒计时的值
  value;
  // 倒计时计时器ID
  intervalId;
  // 选项
  options;
  // 回调队列
  callbackQueues = {};
  constructor(t) {
    r(t.change) && this.on("change", t.change), this.options = Object.assign({ ...h }, t), this.value = this.options.value, this.options.autostart && this.start();
  }
  static create(t, i) {
    const e = {};
    return typeof t == "number" ? e.value = t : a(t) && Object.assign(e, t), r(i) ? e.change = i : a(i) && Object.assign(e, i), new s(e);
  }
  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback // 事件回调
   */
  on(t, i) {
    const e = this.callbackQueues[t] ?? [];
    e.push(i), this.callbackQueues[t] = e;
  }
  /**
   * 触发事件
   * @param eventName 事件名称
   */
  trigger(t) {
    const i = this.callbackQueues[t];
    Array.isArray(i) && i.forEach((e) => e.call(this, this.value));
  }
  // 开始
  start() {
    this.options.value > this.value || (this.loop(), this.trigger("start"));
  }
  // 停止
  stop() {
    this.intervalId !== 0 && (this.clear(), this.trigger("stop"));
  }
  // 继续
  continue() {
    this.intervalId === 0 && (this.loop(), this.trigger("continue"));
  }
  // 倒计时
  decrease() {
    this.value = this.value - this.options.decrement, this.value <= this.options.end && (clearInterval(this.intervalId), this.trigger("finish")), this.trigger("change");
  }
  // 循环
  loop() {
    this.clear(), this.intervalId = n.setInterval(this.decrease.bind(this), this.options.delay);
  }
  // 清除倒计时
  clear() {
    clearInterval(this.intervalId), this.intervalId = 0;
  }
}
const u = s.create;
export {
  u as countdown,
  u as default
};
