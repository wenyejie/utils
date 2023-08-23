'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toDate = require('./toDate.cjs');
const isDate = require('./isDate.cjs');
require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./isString.cjs');
require('./regexp.cjs');
require('./isInvalidDate.cjs');

const monthRange = (date, type = "range") => {
  date = toDate.toDate(date);
  const result = {
    start: null,
    end: null
  };
  if (!isDate.isDate(date)) {
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

exports.default = monthRange;
exports.monthRange = monthRange;
