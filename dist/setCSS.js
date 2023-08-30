import { isString as r } from "./isString.js";
import { isObject as s } from "./isObject.js";
import { camelize as f } from "./camelize.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const b = (m, t, o) => {
  let i = {};
  r(t) ? i[t] = o : s(t) && (i = t);
  for (const e in i)
    m.style[f(e)] = i[e];
};
export {
  b as default,
  b as setCSS
};
