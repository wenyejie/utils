import { isString as f } from "./isString.js";
import { isNumber as o } from "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const j = (m, r, p = 0, i = "") => f(m) ? (!o(p) && i === "" && (i = p, p = 0), r < 0 || m.length < r || p < 0 ? m : m.substring(0, r) + i + m.substring(r + p, m.length)) : "";
export {
  j as default,
  j as spliceString
};
