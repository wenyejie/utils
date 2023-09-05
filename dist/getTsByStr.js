import { isString as u } from "./isString.js";
import { isNumber as t } from "./isNumber.js";
import { isNumberString as a } from "./isNumberString.js";
import { toMultiKeyOneValue as s } from "./toMultiKeyOneValue.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const l = s([
  [["s", "sec", "second"], 1e3],
  [["m", "min", "minute"], 6e4],
  [["h", "hour"], 36e5],
  [["d", "day"], 864e5],
  [["w", "week"], 6048e5],
  [["y", "year"], 31536e6]
]), c = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i, w = (r, n = "millisecond") => {
  if (!t(r) && !u(r))
    return console.error(`${r} is not a number or string`), null;
  if (t(r))
    return r;
  if (r = r.trim(), a(r))
    return Math.floor(+r);
  const e = r.match(c);
  if (!e)
    return console.error(`getTsByStr: Incorrect timestamp string parameter => ${r}`), null;
  let { num: i, unit: m } = e.groups;
  const o = +i * l[m.toLowerCase()];
  return Math.floor(n === "second" ? o / 1e3 : o);
};
export {
  w as default,
  w as getTsByStr
};
