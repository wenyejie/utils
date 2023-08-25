import { isDate } from './isDate.js';
import { isNumber } from './isNumber.js';
import { isString } from './isString.js';
import { rInteger, rIOSDateStringFormat } from './regexp.js';
import { isInvalidDate } from './isInvalidDate.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const toDate = (date, isNew = false) => {
  if (!date || isInvalidDate(date)) {
    return null;
  }
  if (isDate(date)) {
    return isNew ? new Date(date) : date;
  }
  if (isString(date) && rInteger.test(date)) {
    date = Number.parseInt(date);
  }
  if (isNumber(date)) {
    const dateStr = date + "";
    if (dateStr.length >= 8) {
      if (dateStr.length > 13) {
        date = dateStr.substring(0, 13);
      } else {
        date = dateStr.padEnd(13, "0");
      }
      date = Number.parseInt(date);
      if (Number.isNaN(date)) {
        return null;
      }
    }
  }
  if (isString(date) && rIOSDateStringFormat.test(date)) {
    date = date.replace(/-/g, "/");
  }
  date = new Date(date);
  return isDate(date) ? date : null;
};

export { toDate as default, toDate };
