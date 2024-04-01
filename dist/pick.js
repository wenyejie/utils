import { isObject as s } from "./isObject.js";
const f = (t, ...o) => {
  const r = {};
  return s(t) && o.forEach((c) => {
    r[c] = t[c];
  }), r;
};
export {
  f as default,
  f as pick
};
