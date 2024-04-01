import { isObject as c } from "./isObject.js";
const a = (t, r, e) => {
  const n = c(r) ? r : { [r]: e }, o = Object.entries(n);
  return t.find((s) => {
    for (const [f, i] of o)
      if (s[f] !== i)
        return !1;
    return !0;
  });
};
export {
  a as arrFindItemByProp,
  a as default
};
