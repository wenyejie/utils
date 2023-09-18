import { isObject as p } from "./isObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const m = (t, r, e) => {
  const o = p(r) ? r : { [r]: e }, n = Object.entries(o);
  return t.find((s) => {
    for (const [i, f] of n)
      if (s[i] !== f)
        return !1;
    return !0;
  });
};
export {
  m as arrFindItemByProp,
  m as default
};
