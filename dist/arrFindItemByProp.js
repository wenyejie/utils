import { isObject as f } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const l = (t, r, o) => {
  const e = f(r) ? r : { [r]: o }, i = Object.entries(e);
  return t.find((n) => {
    for (const [s, p] of i)
      if (n[s] !== p)
        return !1;
    return !0;
  });
};
export {
  l as arrFindItemByProp,
  l as default
};
