import { isObject as e } from "./isObject.js";
import { arrFindItemByProp as s } from "./arrFindItemByProp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const B = (o, t, i, m) => {
  let r;
  return e(t) ? (r = t, m = i) : r = { [t]: i }, s(o, r)?.[m];
};
export {
  B as arrFindValByProp,
  B as default
};
