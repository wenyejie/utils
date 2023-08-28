import { toDate as t } from "./toDate.js";
import { isDate as i } from "./isDate.js";
import "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const M = (r, o) => (r = t(r), o = t(o), !i(r) || !i(o) ? !1 : r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth());
export {
  M as default,
  M as isSameMonth
};
