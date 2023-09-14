import { isNumber as e } from "./isNumber.js";
import { isString as i } from "./isString.js";
import { rInteger as o } from "./regexp.js";
const f = (r, t = "px") => e(r) || o.test(r) ? r + t : i(r) ? r : "";
export {
  f as default,
  f as toCSSUnit
};
