import { isString as i } from "./isString.js";
import { isNumber as m } from "./isNumber.js";
import { divide as e } from "./exactMath.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./decimalLength.js";
import "./toNumber.js";
import "./spliceString.js";
const f = {
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
}, F = (r, t = {}) => {
  if (t = Object.assign({}, f, t), i(r)) {
    if (r.includes(t.symbol))
      return r;
    r = Number.parseFloat(r);
  }
  return m(r) ? (r = e(r, t.onePercent), r = r.toFixed(t.fractionDigits), t.padEnd || (r = Number.parseFloat(r)), `${r}${t.symbol}`) : t.defaultValue;
};
export {
  F as default,
  F as percentage
};
