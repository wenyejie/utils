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
const j = (r, i) => {
  if (!e(r) && !m(r)) {
    console.error(`${r} is not array or object`);
    return;
  }
  if (e(r)) {
    for (let o = 0; o < r.length; o++)
      if (i.call(r[o], r[o], o, r) === !1)
        return;
  } else
    for (let o in r)
      if (f(r, o) && i.call(r[o], r[o], o, r) === !1)
        return;
};
export {
  j as default,
  j as each
};
