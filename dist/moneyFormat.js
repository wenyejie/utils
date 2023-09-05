import { isNumber as l } from "./isNumber.js";
import { toNumber as m } from "./toNumber.js";
import { nullProtoObject as a } from "./nullProtoObject.js";
import "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const d = {
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
}, b = (r, t) => {
  if (t = Object.assign(a(), d, t), r = m(r), !l(r))
    return t.default;
  const e = r.toFixed(t.decimal).split(".");
  return !t.padEnd && e[1] && (e[1] = e[1].replace(/0+$/, "")), t.symbol + e[0].replace(new RegExp("\\B(?=(\\d{" + t.length + "})+(?!\\d))", "g"), t.split) + (e[1] ? "." + e[1] : "");
};
export {
  b as default,
  b as moneyFormat
};
