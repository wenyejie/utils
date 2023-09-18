import { isObject as e } from "./isObject.js";
import { arrFindItemByProp as s } from "./arrFindItemByProp.js";
import "./toRawType.js";
import "./decapitalize.js";
const l = (o, t, i, m) => {
  let r;
  return e(t) ? (r = t, m = i) : r = { [t]: i }, s(o, r)?.[m];
};
export {
  l as arrFindValByProp,
  l as default
};
