import { toDate } from "./toDate.js";
import { isDate } from "./isDate.js";
const dateObj = (date = /* @__PURE__ */ new Date()) => {
  let result = {};
  date = toDate(date);
  if (isDate(date)) {
    result = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
      time: date.getTime()
    };
  } else {
    console.error("dateObj params error", date);
  }
  return result;
};
export {
  dateObj
};
