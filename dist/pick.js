import { isObject as p } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t, ...i) => {
  const r = {};
  return p(t) && i.forEach((o) => {
    r[o] = t[o];
  }), r;
};
export {
  a as default,
  a as pick
};
