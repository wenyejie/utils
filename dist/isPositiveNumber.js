import { isNumber as i } from "./isNumber.js";
const s = (e) => i(e) && e > 0;
export {
  s as default,
  s as isPositiveNumber
};
