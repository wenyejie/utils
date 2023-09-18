import { toDate as o } from "./toDate.js";
import "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const s = (t) => (t = o(t), new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate());
export {
  s as default,
  s as getDaysByMonth
};
