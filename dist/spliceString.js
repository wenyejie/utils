import { isString as p } from "./isString.js";
import { isNumber as f } from "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const x = (r, m, o = 0, i = "") => p(r) ? (!f(o) && i === "" && (i = o, o = 0), m < 0 || r.length < m || o < 0 ? r : r.substring(0, m) + i + r.substring(m + o, r.length)) : (console.error(`${r} is not a string`), "");
export {
  x as default,
  x as spliceString
};
