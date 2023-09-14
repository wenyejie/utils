import { isString as i } from "./isString.js";
import { isNumber as p } from "./isNumber.js";
const u = (r, o, f = 0, m = "") => i(r) ? (!p(f) && m === "" && (m = f, f = 0), o < 0 || r.length < o || f < 0 ? r : r.substring(0, o) + m + r.substring(o + f, r.length)) : (console.error(`"${r}" is not a string`), "");
export {
  u as default,
  u as spliceString
};
