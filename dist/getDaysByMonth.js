import { toDate as t } from "./toDate.js";
import { isDate as o } from "./isDate.js";
import "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const u = (r) => (r = t(r), o(r) ? new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate() : (console.error("参数错误", r), 0));
export {
  u as default,
  u as getDaysByMonth
};
