import { isDate as r } from "./isDate.js";
import { toDate as e } from "./toDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const f = (o = /* @__PURE__ */ new Date()) => {
  let t = {};
  return o = e(o), r(o) ? (t = {
    year: o.getFullYear(),
    month: o.getMonth() + 1,
    day: o.getDate(),
    week: o.getDay(),
    hour: o.getHours(),
    minute: o.getMinutes(),
    second: o.getSeconds(),
    millisecond: o.getMilliseconds(),
    time: o.getTime()
  }, t) : (console.error(`${o} is not a date`), t);
};
export {
  f as dateObj,
  f as default
};
