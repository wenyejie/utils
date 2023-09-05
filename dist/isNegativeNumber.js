import { isNumber as r } from "./isNumber.js";
const i = (e) => r(e) && e < 0;
export {
  i as default,
  i as isNegativeNumber
};
