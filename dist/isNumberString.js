import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isNumberString = (obj) => {
  if (!isString(obj)) {
    return false;
  }
  return (+obj).toString() === obj;
};

export { isNumberString as default, isNumberString };
