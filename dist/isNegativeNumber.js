import { isNumber } from "./isNumber.js";
const isNegativeNumber = (obj) => isNumber(obj) && obj < 0;
export {
  isNegativeNumber
};
