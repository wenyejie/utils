import { isNumber } from './isNumber.js';
import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const toNumber = (num, defaultValue = 0) => {
  if (isString(num)) {
    num = Number.parseFloat(num);
  }
  if (isNumber(num)) {
    return num;
  }
  return defaultValue;
};

export { toNumber as default, toNumber };
