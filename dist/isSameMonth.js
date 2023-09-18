import { toDate as t } from "./toDate.js";
import { isDate as i } from "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const M = (o, r) => (o = t(o), r = t(r), !i(o) || !i(r) ? (console.error(`"${o}" or "${r}" is not a valid date`), !1) : o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth());
export {
  M as default,
  M as isSameMonth
};
