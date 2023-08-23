import { isNumber } from './isNumber.js';
import { isString } from './isString.js';
import { rInteger } from './regexp.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const toCSSUnit = (number, defaultUnit = "px") => {
  if (isNumber(number) || rInteger.test(number)) {
    return number + defaultUnit;
  } else if (isString(number)) {
    return number;
  } else {
    return "";
  }
};

export { toCSSUnit as default, toCSSUnit };
