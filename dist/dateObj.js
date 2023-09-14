import { toDate as i } from "./toDate.js";
import { isDate as r } from "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const y = (t = /* @__PURE__ */ new Date()) => {
  let o = {};
  return t = i(t), r(t) && (o = {
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
  y as dateObj,
  y as default
};
