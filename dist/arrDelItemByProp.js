import { isObject as p } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const j = (t, e, o) => {
  const i = p(e) ? e : { [e]: o }, n = Object.entries(i), r = t.findIndex((s) => {
    for (const [c, f] of n)
      if (s[c] !== f)
        return !1;
    return !0;
  });
  return r >= 0 && t.splice(r, 1), t;
};
export {
  j as arrDelItemByProp,
  j as default
};
