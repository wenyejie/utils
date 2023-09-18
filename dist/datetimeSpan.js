import { isDate as n } from "./isDate.js";
import { TS_UNIT as o } from "./utils.js";
const i = {
  types: ["year", "week", "day", "hour", "minute", "second"]
}, c = (e) => {
  const t = { ...i };
  return n(e) ? t.compare = e : Array.isArray(e) ? t.types = e : Object.assign(t, e), t;
}, l = (e, t) => {
  const { compare: m, types: p } = c(t);
  let s = n(e) ? Math.abs(e.getTime() - (m ?? /* @__PURE__ */ new Date()).getTime()) : Number.parseInt(e);
  const a = {};
  for (const r of p)
    a[r] = Math.floor(s / o[r.toUpperCase()]), s %= o[r.toUpperCase()];
  return a;
};
export {
  l as datetimeSpan,
  l as default
};
