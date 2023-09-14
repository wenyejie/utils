import { isDate as p } from "./isDate.js";
var t = /* @__PURE__ */ ((e) => (e[e.YEAR = 31536e6] = "YEAR", e[e.WEEK = 6048e5] = "WEEK", e[e.DAY = 864e5] = "DAY", e[e.HOUR = 36e5] = "HOUR", e[e.MINUTE = 6e4] = "MINUTE", e[e.SECOND = 1e3] = "SECOND", e[e.MILLISECOND = 1] = "MILLISECOND", e))(t || {});
const m = {
  types: ["year", "week", "day", "hour", "minute", "second"]
};
t.YEAR, t.WEEK, t.DAY, t.HOUR, t.MINUTE, t.SECOND, t.MILLISECOND;
const O = (e, n) => {
  const s = Object.assign(
    {
      ...m
    },
    n
  );
  let r = p(e) ? Math.abs(e.getTime() - (s.compare ?? /* @__PURE__ */ new Date()).getTime()) : Number.parseInt(e);
  const a = {};
  for (const o of s.types)
    a[o] = Math.floor(r / t[o.toUpperCase()]), r %= t[o.toUpperCase()];
  return a;
};
export {
  O as datetimeSpan,
  O as default
};
