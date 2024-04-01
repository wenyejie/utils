import { isObject as o } from "./isObject.js";
import { arrFindItemByProp as s } from "./arrFindItemByProp.js";
const c = (e, t, i, m) => {
  let r;
  return o(t) ? (r = t, m = i) : r = { [t]: i }, s(e, r)?.[m];
};
export {
  c as arrFindValByProp,
  c as default
};
