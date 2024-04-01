import { isFunction as u } from "./isFunction.js";
import { arrDelItemByProp as s } from "./arrDelItemByProp.js";
class e {
  callbackMap = {};
  static create() {
    return new e();
  }
  /**
   * 触发订阅
   * @param eventName 事件名称
   * @param data 数据
   */
  trigger(t, i) {
    if (!t)
      return;
    const c = this.callbackMap[t] ?? { queue: [] }, { queue: r } = c;
    if (c.data = i, r.length === 0) {
      this.callbackMap[t] = c;
      return;
    }
    r.forEach(({ callback: a }) => a(i)), c.queue = r.filter(({ once: a }) => !a), this.callbackMap[t] = c;
  }
  /**
   * 订阅事件
   * @param eventName 事件名称
   * @param callback 回调
   * @param options 选项
   */
  on(t, i, c) {
    if (!t || !u(i()))
      return;
    const r = this.callbackMap[t] ?? { queue: [] }, { data: a, queue: l } = r;
    c?.immediate && i(a), l.push({
      once: c?.once ?? !1,
      callback: i
    }), this.callbackMap[t] = r;
  }
  /**
   * 移除订阅/频道
   * @param eventName 事件名称
   * @param callback 回调
   */
  off(t, i) {
    if (!t)
      return;
    const c = this.callbackMap[t];
    if (!c)
      return;
    const { queue: r } = c;
    u(i) ? s(r, "callback", i) : delete this.callbackMap[t];
  }
}
export {
  e as PublishSubscribe,
  e as default
};
