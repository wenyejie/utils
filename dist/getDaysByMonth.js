import { toDate as o } from "./toDate.js";
import "./isDate.js";
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
const f = (t) => (t = o(t), new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate());
export {
  f as default,
  f as getDaysByMonth
};
