import { isDate as o } from "./isDate.js";
import { isNumber as s } from "./isNumber.js";
import { isString as f } from "./isString.js";
import { rInteger as l, rIOSDateStringFormat as m } from "./regexp.js";
import { isInvalidDate as n } from "./isInvalidDate.js";
import { isObject as u } from "./isObject.js";
import { nullProtoObject as p } from "./nullProtoObject.js";
const b = (r) => {
  const t = p();
  return typeof r == "boolean" ? t.toNew = r : u(r) ? Object.assign(t, r) : t.defaultValue = r, t;
}, w = (r, t) => {
  const i = b(t);
  if (!r || n(r))
    return console.error(`"${r}" is not valid date`), i.defaultValue;
  if (o(r))
    return i.toNew ? new Date(r) : r;
  if (f(r) && (l.test(r) ? r = Number.parseInt(r) : m.test(r) && (r = r.replace(/-/g, "/"))), s(r)) {
    let e = Number.parseInt(r + "") + "";
    e.length > 13 ? e = e.substring(0, 13) : e.length < 13 && (e = e.padEnd(13, "0")), r = Number.parseInt(e);
  }
  return r = new Date(r), n(r) ? i.defaultValue : r;
};
export {
  w as default,
  w as toDate
};
