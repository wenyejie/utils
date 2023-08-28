import { isNumber as o } from "./isNumber.js";
import { isString as i } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const b = (r, t = 0) => (i(r) && (r = Number.parseFloat(r)), o(r) ? r : t);
export {
  b as default,
  b as toNumber
};
