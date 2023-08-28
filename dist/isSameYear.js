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
const g = (r, o) => (r = t(r), o = t(o), !i(r) || !i(o) ? !1 : r.getFullYear() === o.getFullYear());
export {
  g as default,
  g as isSameYear
};
