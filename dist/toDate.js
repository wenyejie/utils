import { isDate as n } from "./isDate.js";
import { isNumber as s } from "./isNumber.js";
import { isString as m } from "./isString.js";
import { rInteger as t, rIOSDateStringFormat as f } from "./regexp.js";
import { isInvalidDate as p } from "./isInvalidDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const c = (r, o = !1) => {
  if (!r || p(r))
    return null;
  if (n(r))
    return o ? new Date(r) : r;
  if (m(r) && t.test(r) && (r = Number.parseInt(r)), s(r)) {
    const i = r + "";
    if (i.length >= 8 && (i.length > 13 ? r = i.substring(0, 13) : r = i.padEnd(13, "0"), r = Number.parseInt(r), Number.isNaN(r)))
      return null;
  }
  return m(r) && f.test(r) && (r = r.replace(/-/g, "/")), r = new Date(r), n(r) ? r : null;
};
export {
  c as default,
  c as toDate
};
