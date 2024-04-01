import { isObject as u } from "./isObject.js";
const d = (e, t, r) => {
  const o = u(t) ? t : { [t]: r }, s = Object.entries(o), n = e.findIndex((i) => {
    for (const [c, f] of s)
      if (i[c] !== f)
        return !1;
    return !0;
  });
  return n >= 0 && e.splice(n, 1), e;
};
export {
  d as arrDelItemByProp,
  d as default
};
