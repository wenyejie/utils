import { toDate as t } from "./toDate.js";
import { isDate as i } from "./isDate.js";
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
const h = (r, o) => (r = t(r), o = t(o), !i(r) || !i(o) ? (console.error(`"${r}" or "${o}" is not a valid date`), !1) : r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate());
export {
  h as default,
  h as isSameDay
};
