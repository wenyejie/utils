'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isDate = require('./isDate.cjs');
const isNumber = require('./isNumber.cjs');
const isString = require('./isString.cjs');
const regexp = require('./regexp.cjs');
const isInvalidDate = require('./isInvalidDate.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const toDate = (date, isNew = false) => {
  if (!date || isInvalidDate.isInvalidDate(date)) {
    return null;
  }
  if (isDate.isDate(date)) {
    return isNew ? new Date(date) : date;
  }
  if (isString.isString(date) && regexp.rInteger.test(date)) {
    date = Number.parseInt(date);
  }
  if (isNumber.isNumber(date)) {
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
  if (isString.isString(date) && regexp.rIOSDateStringFormat.test(date)) {
    date = date.replace(/-/g, "/");
  }
  date = new Date(date);
  return isDate.isDate(date) ? date : null;
};

exports.default = toDate;
exports.toDate = toDate;
