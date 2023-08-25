'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toDate = require('./toDate.cjs');
const isDate = require('./isDate.cjs');
require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isString.cjs');
require('./regexp.cjs');
require('./isInvalidDate.cjs');

const isSameMonth = (date1, date2) => {
  date1 = toDate.toDate(date1);
  date2 = toDate.toDate(date2);
  if (!isDate.isDate(date1) || !isDate.isDate(date2)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

exports.default = isSameMonth;
exports.isSameMonth = isSameMonth;
