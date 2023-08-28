import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = (r) => t(r) ? (+r).toString() === r : !1;
export {
  p as default,
  p as isNumberString
};
