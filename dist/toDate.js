import { isDate as n } from "./isDate.js";
import { isNumber as s } from "./isNumber.js";
import { isString as o } from "./isString.js";
import { rInteger as t, rIOSDateStringFormat as l } from "./regexp.js";
import { isInvalidDate as f } from "./isInvalidDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const S = (r, m = !1) => {
  if (!r || f(r))
    return console.log(`${r} is not a valid date`), null;
  if (n(r))
    return m ? new Date(r) : r;
  if (o(r) && t.test(r) && (r = Number.parseInt(r)), s(r)) {
    const i = r + "";
    if (i.length >= 8 && (i.length > 13 ? r = i.substring(0, 13) : r = i.padEnd(13, "0"), r = Number.parseInt(r), Number.isNaN(r)))
      return null;
  }
  return o(r) && l.test(r) && (r = r.replace(/-/g, "/")), r = new Date(r), n(r) ? r : null;
};
export {
  S as default,
  S as toDate
};
