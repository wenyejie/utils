import { isNumber } from "./isNumber.js";
const isPositiveNumber = (obj) => isNumber(obj) && obj > 0;
export {
  isPositiveNumber
};
