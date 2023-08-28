import { isArray as e } from "./isArray.js";
import { isObject as m } from "./isObject.js";
import { hasOwn as f } from "./hasOwn.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./hasOwnProperty.js";
import "./isUndefined.js";
import "./isNull.js";
const b = (r, o) => {
  if (!(!e(r) && !m(r))) {
    if (e(r)) {
      for (let i = 0; i < r.length; i++)
        if (o.call(r[i], r[i], i, r) === !1)
          return;
    } else
      for (let i in r)
        if (f(r, i) && o.call(r[i], r[i], i, r) === !1)
          return;
  }
};
export {
  b as default,
  b as each
};
