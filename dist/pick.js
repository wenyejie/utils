import { isObject as c } from "./isObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const f = (t, ...i) => {
  const r = {};
  return c(t) && i.forEach((o) => {
    r[o] = t[o];
  }), r;
};
export {
  f as default,
  f as pick
};
