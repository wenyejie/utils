import { isNumber as r } from "./isNumber.js";
import { toNumber as a } from "./toNumber.js";
import { nullProtoObject as d } from "./nullProtoObject.js";
import "./isString.js";
const m = {
  decimal: 2,
  // 小数点长度
  symbol: "",
  // 钱币符号
  default: "",
  // 默认值
  split: ",",
  // 分隔符号
  length: 3,
  // 分割长度
  padEnd: !0
  // 是否尾部填充
}, p = (l, e) => {
  if (e = Object.assign(d(), m, e), l = a(l), !r(l))
    return e.default;
  const t = l.toFixed(e.decimal).split(".");
  return !e.padEnd && t[1] && (t[1] = t[1].replace(/0+$/, "")), e.symbol + t[0].replace(new RegExp("\\B(?=(\\d{" + e.length + "})+(?!\\d))", "g"), e.split) + (t[1] ? "." + t[1] : "");
};
export {
  p as default,
  p as moneyFormat
};
