import { isDate } from './isDate.js';
import { toDate } from './toDate.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';
import './isNumber.js';
import './isString.js';
import './regexp.js';
import './isInvalidDate.js';

const dateObj = (date = /* @__PURE__ */ new Date()) => {
  let result = {};
  date = toDate(date);
  if (!isDate(date)) {
    return result;
  }
  result = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
    time: date.getTime()
  };
  return result;
};

export { dateObj, dateObj as default };
