import { isNumber } from "./isNumber.js";
import { isString } from "./isString.js";
const INTEGER_BIT = /^\d+\.?/;
const decimalLength = (number) => {
  if (isString(number)) {
    number = +number;
  }
  if (!isNumber(number)) {
    console.error(`"${number}" is not a number`);
    return 0;
  }
  return `${number}`.replace(INTEGER_BIT, "").length;
};
export {
  decimalLength
};
