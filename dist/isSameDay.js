import { toDate as t } from "./toDate.js";
import { isDate as e } from "./isDate.js";
const n = (r, o) => (r = t(r), o = t(o), !e(r) || !e(o) ? (console.error(`"${r}" or "${o}" is not a valid date`), !1) : r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate());
export {
  n as default,
  n as isSameDay
};
