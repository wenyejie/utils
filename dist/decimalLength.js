import { isNumber as o } from "./isNumber.js";
import { isString as r } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const i = /^\d+\.?/, f = (t) => (r(t) && (t = +t), o(t) ? `${t}`.replace(i, "").length : (console.error(`${t} is not a number`), 0));
export {
  f as decimalLength,
  f as default
};
