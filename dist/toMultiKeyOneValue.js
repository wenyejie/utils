import { isArray as l } from "./isArray.js";
const u = {
  get: (e, t) => e[t]?.value,
  set: (e, t, o) => {
    let r = [];
    r.includes(",") && (r = t.split(",")), r = l(r) ? r : [t];
    const n = e[r.find((s) => e[s])] || { value: o };
    for (const s of r)
      e[s] = n;
    return !0;
  }
}, f = (e) => {
  const t = {}, o = new Proxy(t, u);
  l(e) || console.error("Error parameter", e);
  for (const [r, n] of e)
    o[r] = n;
  return o;
};
export {
  f as default,
  f as toMultiKeyOneValue
};
