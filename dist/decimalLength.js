import { isNumber as i } from "./isNumber.js";
import { isString as r } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const o = /^\d+\.?/, c = (t) => (r(t) && (t = +t), i(t) ? `${t}`.replace(o, "").length : 0);
export {
  c as decimalLength,
  c as default
};
