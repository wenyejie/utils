import { isNumber } from './isNumber.js';
import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const INTEGER_BIT = /^\d+\.?/;
const decimalLength = (number) => {
  if (isString(number)) {
    number = +number;
  }
  if (!isNumber(number)) {
    return 0;
  }
  return `${number}`.replace(INTEGER_BIT, "").length;
};

export { decimalLength, decimalLength as default };
