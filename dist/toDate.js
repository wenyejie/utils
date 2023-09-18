import { isDate as n } from "./isDate.js";
import { isNumber as s } from "./isNumber.js";
import { isString as f } from "./isString.js";
import { rInteger as l, rIOSDateStringFormat as m } from "./regexp.js";
import { isInvalidDate as o } from "./isInvalidDate.js";
import { isObject as u } from "./isObject.js";
import { nullProtoObject as p } from "./nullProtoObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const b = (r) => {
  const t = p();
  return typeof r == "boolean" ? t.toNew = r : u(r) ? Object.assign(t, r) : t.defaultValue = r, t;
}, S = (r, t) => {
  const i = b(t);
  if (!r || o(r))
    return console.error(`"${r}" is not valid date`), i.defaultValue;
  if (n(r))
    return i.toNew ? new Date(r) : r;
  if (f(r) && (l.test(r) ? r = Number.parseInt(r) : m.test(r) && (r = r.replace(/-/g, "/"))), s(r)) {
    let e = Number.parseInt(r + "") + "";
    e.length > 13 ? e = e.substring(0, 13) : e.length < 13 && (e = e.padEnd(13, "0")), r = Number.parseInt(e);
  }
  return r = new Date(r), o(r) ? i.defaultValue : r;
};
export {
  S as default,
  S as toDate
};
