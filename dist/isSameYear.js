import { toDate } from './toDate.js';
import { isDate } from './isDate.js';
import './isNumber.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './isString.js';
import './regexp.js';
import './isInvalidDate.js';

const isSameYear = (date1, date2) => {
  date1 = toDate(date1);
  date2 = toDate(date2);
  if (!isDate(date1) || !isDate(date2)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear();
};

export { isSameYear as default, isSameYear };
