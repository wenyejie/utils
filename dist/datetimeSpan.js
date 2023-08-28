import { isDate as i } from "./isDate.js";
import { camelize as m } from "./camelize.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = {
  types: ["year", "week", "day", "hour", "minute", "second"],
  hasYear: !1,
  year: 31536e6,
  hasWeek: !1,
  week: 6048e5,
  hasDay: !0,
  day: 864e5,
  hasHour: !0,
  hour: 36e5,
  hasMinute: !0,
  minute: 6e4,
  hasSecond: !0,
  second: 1e3,
  hasMillisecond: !1,
  millisecond: 1,
  defaultValue: ""
}, d = (s, o) => {
  const e = Object.assign(
    {
      compare: /* @__PURE__ */ new Date()
    },
    p,
    o
  );
  let a = i(s) ? Math.abs(s.getTime() - e.compare.getTime()) : Number.parseInt(s);
  const r = {};
  return e.types.forEach((t) => {
    e[m(`has-${t}`)] && (r[t] = Math.floor(a / e[t]), a %= e[t]);
  }), r;
};
export {
  d as datetimeSpan,
  d as default
};
