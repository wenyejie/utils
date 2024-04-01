import { toDate as t } from "./toDate.js";
import { isDate as l } from "./isDate.js";
const i = (o, r) => (o = t(o), r = t(r), !l(o) || !l(r) ? (console.error(`"${o}" or "${r}" is not a valid date`), !1) : o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth());
export {
  i as default,
  i as isSameMonth
};
