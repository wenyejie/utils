import { isString as m } from "./isString.js";
import { isNumber as t } from "./isNumber.js";
import { isNumberString as a } from "./isNumberString.js";
import { toMultiKeyOneValue as s } from "./toMultiKeyOneValue.js";
const l = s([
  [["s", "sec", "second"], 1e3],
  [["m", "min", "minute"], 6e4],
  [["h", "hour"], 36e5],
  [["d", "day"], 864e5],
  [["w", "week"], 6048e5],
  [["y", "year"], 31536e6]
]), c = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i, g = (e, n = "millisecond") => {
  if (!t(e) && !m(e))
    return console.error(`"${e}" is not a number or string`), null;
  if (t(e))
    return e;
  if (e = e.trim(), a(e))
    return Math.floor(+e);
  const r = e.match(c);
  if (!r)
    return console.error(`getTsByStr: Incorrect timestamp string parameter => "${e}"`), null;
  let { num: i, unit: u } = r.groups;
  const o = +i * l[u.toLowerCase()];
  return Math.floor(n === "second" ? o / 1e3 : o);
};
export {
  g as default,
  g as getTsByStr
};
