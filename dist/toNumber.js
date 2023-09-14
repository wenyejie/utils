import { isNumber as e } from "./isNumber.js";
import { isString as o } from "./isString.js";
const s = (r, t = 0) => (o(r) && (r = Number.parseFloat(r)), e(r) ? r : t);
export {
  s as default,
  s as toNumber
};
