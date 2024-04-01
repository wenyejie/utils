import { toDate as o } from "./toDate.js";
import { isDate as i } from "./isDate.js";
const s = (e = /* @__PURE__ */ new Date()) => {
  let t = {};
  return e = o(e), i(e) && (t = {
    year: e.getFullYear(),
    month: e.getMonth() + 1,
    day: e.getDate(),
    week: e.getDay(),
    hour: e.getHours(),
    minute: e.getMinutes(),
    second: e.getSeconds(),
    millisecond: e.getMilliseconds(),
    time: e.getTime()
  }), t;
};
export {
  s as dateObj,
  s as default
};
