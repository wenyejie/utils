import { isNumber as o } from "./isNumber.js";
import { isString as r } from "./isString.js";
const i = /^\d+\.?/, a = (t) => (r(t) && (t = +t), o(t) ? `${t}`.replace(i, "").length : (console.error(`"${t}" is not a number`), 0));
export {
  a as decimalLength,
  a as default
};
