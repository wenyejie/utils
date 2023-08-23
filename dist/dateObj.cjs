'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isDate = require('./isDate.cjs');
const toDate = require('./toDate.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./isNumber.cjs');
require('./isString.cjs');
require('./regexp.cjs');
require('./isInvalidDate.cjs');

const dateObj = (date = /* @__PURE__ */ new Date()) => {
  let result = {};
  date = toDate.toDate(date);
  if (!isDate.isDate(date)) {
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

exports.dateObj = dateObj;
exports.default = dateObj;
