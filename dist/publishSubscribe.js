import { isFunction as o } from "./isFunction.js";
import { arrDelItemByProp as l } from "./arrDelItemByProp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isObject.js";
class u {
  callbackMap = {};
  static create() {
    return new u();
  }
  /**
   * 触发订阅
   * @param eventName 事件名称
   * @param data 数据
   */
  trigger(t, r) {
    if (!t)
      return;
    const i = this.callbackMap[t] ?? { queue: [] }, { queue: c } = i;
    if (i.data = r, c.length === 0) {
      this.callbackMap[t] = i;
      return;
    }
    c.forEach(({ callback: a }) => a(r)), i.queue = c.filter(({ once: a }) => !a), this.callbackMap[t] = i;
  }
  /**
   * 订阅事件
   * @param eventName 事件名称
   * @param callback 回调
   * @param options 选项
   */
  on(t, r, i) {
    if (!t || !o(r()))
      return;
    const c = this.callbackMap[t] ?? { queue: [] }, { data: a, queue: e } = c;
    i?.immediate && r(a), e.push({
      once: i?.once ?? !1,
      callback: r
    }), this.callbackMap[t] = c;
  }
  /**
   * 移除订阅/频道
   * @param eventName 事件名称
   * @param callback 回调
   */
  off(t, r) {
    if (!t)
      return;
    const i = this.callbackMap[t];
    if (!i)
      return;
    const { queue: c } = i;
    o(r) ? l(c, "callback", r) : delete this.callbackMap[t];
  }
}
export {
  u as PublishSubscribe,
  u as default
};
