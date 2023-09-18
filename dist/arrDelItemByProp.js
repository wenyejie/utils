import { isObject as p } from "./isObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const d = (t, e, n) => {
  const o = p(e) ? e : { [e]: n }, i = Object.entries(o), r = t.findIndex((s) => {
    for (const [c, f] of i)
      if (s[c] !== f)
        return !1;
    return !0;
  });
  return r >= 0 && t.splice(r, 1), t;
};
export {
  d as arrDelItemByProp,
  d as default
};
