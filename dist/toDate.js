import { isDate as n } from "./isDate.js";
import { isNumber as m } from "./isNumber.js";
import { isString as f } from "./isString.js";
import { rInteger as s, rIOSDateStringFormat as l } from "./regexp.js";
import { isInvalidDate as t } from "./isInvalidDate.js";
import { isObject as u } from "./isObject.js";
import { nullProtoObject as p } from "./nullProtoObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const c = (r) => {
  const i = p();
  return typeof r == "boolean" ? i.toNew = r : u(r) ? Object.assign(i, r) : i.defaultValue = r, i;
}, h = (r, i) => {
  const o = c(i);
  if (!r || t(r))
    return console.error(`"${r}" is not valid date`), o.defaultValue;
  if (n(r))
    return o.toNew ? new Date(r) : r;
  if (f(r) && (s.test(r) ? r = Number.parseInt(r) : l.test(r) && (r = r.replace(/-/g, "/"))), m(r)) {
    const e = r + "";
    e.length >= 8 && (e.length > 13 ? r = e.substring(0, 13) : r = e.padEnd(13, "0"), r = Number.parseInt(r));
  }
  return r = new Date(r), t(r) ? o.defaultValue : r;
};
export {
  h as default,
  h as toDate
};
