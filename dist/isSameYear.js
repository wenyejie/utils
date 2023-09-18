import { toDate as i } from "./toDate.js";
import { isDate as t } from "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const c = (r, o) => (r = i(r), o = i(o), !t(r) || !t(o) ? (console.error(`"${r}" or "${o}" is not a valid date`), !1) : r.getFullYear() === o.getFullYear());
export {
  c as default,
  c as isSameYear
};
