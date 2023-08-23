import { toDate } from './toDate.js';
import { isDate } from './isDate.js';
import './isNumber.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './isString.js';
import './regexp.js';
import './isInvalidDate.js';

const isSameDay = (date1, date2) => {
  date1 = toDate(date1);
  date2 = toDate(date2);
  if (!isDate(date1) || !isDate(date2)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export { isSameDay as default, isSameDay };
