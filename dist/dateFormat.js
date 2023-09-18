import { toDate as n } from "./toDate.js";
import { padStart as t } from "./padStart.js";
import "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
import "./isUndefined.js";
const d = (r, s = "YYYY-MM-DD hh:mm:ss", o = "") => {
  const e = n(r);
  return e ? s.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g, (a) => {
    switch (a) {
      case "YYYY":
        return e.getFullYear() + "";
      case "YY":
        return e.getFullYear() % 100 + "";
      case "MM":
        return t(e.getMonth() + 1);
      case "M":
        return e.getMonth() + 1 + "";
      case "DD":
        return t(e.getDate());
      case "D":
        return e.getDate() + "";
      case "hh":
        return t(e.getHours());
      case "h":
        return e.getHours() + "";
      case "mm":
        return t(e.getMinutes());
      case "m":
        return e.getMinutes() + "";
      case "ss":
        return t(e.getSeconds());
      case "s":
        return e.getSeconds() + "";
      case "SSS":
        return t(e.getMilliseconds(), 3);
      case "SS":
        return t(Math.floor(e.getMilliseconds() / 10));
      case "S":
        return Math.floor(e.getMilliseconds() / 100) + "";
    }
  }) : (console.error(`"${r}" is not valid date`), o);
};
export {
  d as dateFormat,
  d as default
};
