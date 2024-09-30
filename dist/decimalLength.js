import { isNumber } from "./isNumber.js";
import { toNumber } from "./toNumber.js";
const INTEGER_BIT = /^\d+\.?/;
const decimalLength = (number) => {
  number = toNumber(number);
  if (!isNumber(number)) {
    console.error(`"${number}" is not a number`);
    return 0;
  }
  return `${number}`.replace(INTEGER_BIT, "").length;
};
export {
  decimalLength
};
