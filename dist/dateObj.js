import { toDate as e } from "./toDate.js";
import { isDate as i } from "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const f = (t = /* @__PURE__ */ new Date()) => {
  let o = {};
  return t = e(t), i(t) && (o = {
    year: t.getFullYear(),
    month: t.getMonth() + 1,
    day: t.getDate(),
    week: t.getDay(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
    millisecond: t.getMilliseconds(),
    time: t.getTime()
  }), o;
};
export {
  f as dateObj,
  f as default
};
