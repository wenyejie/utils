import { isObject as s } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const n = (r, o) => {
  if (!Array.isArray(r) && !s(r)) {
    console.error(`${r} is not array or object`);
    return;
  }
  if (Array.isArray(r))
    for (let e = 0; e < r.length && o(r[e], e, r) !== !1; e++)
      ;
  else
    for (const [e, i] of Object.entries(r))
      if (o(i, e, r) === !1)
        break;
};
export {
  n as default,
  n as each
};
