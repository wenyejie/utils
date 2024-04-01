import { toDate as e } from "./toDate.js";
import { isDate as l } from "./isDate.js";
const t = (r, o) => (r = e(r), o = e(o), !l(r) || !l(o) ? (console.error(`"${r}" or "${o}" is not a valid date`), !1) : r.getFullYear() === o.getFullYear());
export {
  t as default,
  t as isSameYear
};
