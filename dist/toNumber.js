import { isNumber } from "./isNumber.js";
import { isString } from "./isString.js";
const toNumber = (num, defaultValue = 0) => {
  if (isString(num)) {
    num = Number.parseFloat(num);
  }
  if (isNumber(num)) {
    return num;
  }
  return defaultValue;
};
export {
  toNumber
};
