import { toDate } from './toDate.js';
import { isDate } from './isDate.js';
import './isNumber.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './isString.js';
import './regexp.js';
import './isInvalidDate.js';

const monthRange = (date, type = "range") => {
  date = toDate(date);
  const result = {
    start: null,
    end: null
  };
  if (!isDate(date)) {
    console.error("参数错误", date);
    return type === "range" ? result : null;
  }
  const start = new Date(date);
  if (type !== "end") {
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    if (type === "start") {
      return start;
    }
  }
  const end = new Date(date);
  if (type !== "start") {
    end.setMonth(end.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    if (type === "end") {
      return end;
    }
  }
  result.start = start;
  result.end = end;
  return result;
};

export { monthRange as default, monthRange };
