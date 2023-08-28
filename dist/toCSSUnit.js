import { isNumber as i } from "./isNumber.js";
import { isString as o } from "./isString.js";
import { rInteger as m } from "./regexp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const x = (r, t = "px") => i(r) || m.test(r) ? r + t : o(r) ? r : "";
export {
  x as default,
  x as toCSSUnit
};
