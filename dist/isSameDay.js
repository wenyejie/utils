import { toDate as o } from "./toDate.js";
import { isDate as i } from "./isDate.js";
import "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const h = (r, t) => (r = o(r), t = o(t), !i(r) || !i(t) ? !1 : r.getFullYear() === t.getFullYear() && r.getMonth() === t.getMonth() && r.getDate() === t.getDate());
export {
  h as default,
  h as isSameDay
};
