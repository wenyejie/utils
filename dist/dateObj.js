import { isDate as e } from "./isDate.js";
import { toDate as r } from "./toDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const f = (t = /* @__PURE__ */ new Date()) => {
  let o = {};
  return t = r(t), e(t) && (o = {
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
