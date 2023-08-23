import { toDate } from './toDate.js';
import { isDate } from './isDate.js';
import './isNumber.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './isString.js';
import './regexp.js';
import './isInvalidDate.js';

const getDaysByMonth = (date) => {
  date = toDate(date);
  if (!isDate(date)) {
    console.error("参数错误", date);
    return 0;
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export { getDaysByMonth as default, getDaysByMonth };
