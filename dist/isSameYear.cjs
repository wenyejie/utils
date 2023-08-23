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

const isSameYear = (date1, date2) => {
  date1 = toDate.toDate(date1);
  date2 = toDate.toDate(date2);
  if (!isDate.isDate(date1) || !isDate.isDate(date2)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear();
};

exports.default = isSameYear;
exports.isSameYear = isSameYear;
