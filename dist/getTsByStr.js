import { isString as a } from "./isString.js";
import { isNumber as n } from "./isNumber.js";
import { isNumberString as s } from "./isNumberString.js";
import { toMultiKeyOneValue as l } from "./toMultiKeyOneValue.js";
import { TS_UNIT as e } from "./utils.js";
const c = l([
  [["s", "sec", "second"], e.SECOND],
  [["m", "min", "minute"], e.MINUTE],
  [["h", "hour"], e.HOUR],
  [["d", "day"], e.DAY],
  [["w", "week"], e.WEEK],
  [["y", "year"], e.YEAR]
]), f = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i, S = (r, i = "millisecond") => {
  if (!n(r) && !a(r))
    return console.error(`"${r}" is not a number or string`), null;
  if (n(r))
    return r;
  if (r = r.trim(), s(r))
    return Math.floor(+r);
  const o = r.match(f);
  if (!o)
    return console.error(`getTsByStr: Incorrect timestamp string parameter => "${r}"`), null;
  let { num: m, unit: u } = o.groups;
  const t = +m * c[u.toLowerCase()];
  return Math.floor(i === "second" ? t / 1e3 : t);
};
export {
  S as default,
  S as getTsByStr
};
