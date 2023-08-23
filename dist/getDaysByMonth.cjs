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

const getDaysByMonth = (date) => {
  date = toDate.toDate(date);
  if (!isDate.isDate(date)) {
    console.error("参数错误", date);
    return 0;
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

exports.default = getDaysByMonth;
exports.getDaysByMonth = getDaysByMonth;
