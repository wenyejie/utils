import { isString as u } from "./isString.js";
import { isNumber as o } from "./isNumber.js";
import { isNumberString as s } from "./isNumberString.js";
import { toMultiKeyOneValue as a } from "./toMultiKeyOneValue.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isArray.js";
const l = a([
  [["s", "sec", "second"], 1e3],
  [["m", "min", "minute"], 6e4],
  [["h", "hour"], 36e5],
  [["d", "day"], 864e5],
  [["w", "week"], 6048e5],
  [["y", "year"], 31536e6]
]), c = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i, T = (r, i = "millisecond") => {
  if (!o(r) && !u(r))
    return console.error(`getTsByStr: str is type error => ${r.toString()}`), null;
  if (o(r))
    return r;
  if (r = r.trim(), s(r))
    return Math.floor(+r);
  const e = r.match(c);
  if (!e)
    return console.error(`getTsByStr: Incorrect timestamp string parameter => ${r}`), null;
  let { num: n, unit: m } = e.groups;
  const t = +n * l[m.toLowerCase()];
  return Math.floor(i === "second" ? t / 1e3 : t);
};
export {
  T as default,
  T as getTsByStr
};
