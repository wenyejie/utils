import { isString as e } from "./isString.js";
import { isNumber as i } from "./isNumber.js";
import { divide as f } from "./exactMath.js";
const d = {
  fractionDigits: 2,
  // 保留小数位
  padEnd: !1,
  // 是否需要后续补零
  defaultValue: "",
  // 默认值, 即当输入值无法被转化时显示的值
  onePercent: 0.01,
  // 百分之一的数值, 0.01 * 100 = 1, 1 * 100 = 100
  symbol: "%"
  // 百分比符号
}, c = (r, t = {}) => {
  if (t = Object.assign({}, d, t), e(r)) {
    if (r.includes(t.symbol))
      return r;
    r = Number.parseFloat(r);
  }
  return i(r) ? (r = f(r, t.onePercent), r = r.toFixed(t.fractionDigits), t.padEnd || (r = Number.parseFloat(r)), `${r}${t.symbol}`) : t.defaultValue;
};
export {
  c as default,
  c as percentage
};
