'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toDate = require('./toDate.cjs');
const isDate = require('./isDate.cjs');
const padStart = require('./padStart.cjs');
require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isString.cjs');
require('./regexp.cjs');
require('./isInvalidDate.cjs');
require('./isUndefined.cjs');

const dateFormat = (date, format = "YYYY-MM-DD hh:mm:ss", defaultValue = "") => {
  date = toDate.toDate(date);
  if (!isDate.isDate(date)) {
    return defaultValue;
  }
  return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g, (str) => {
    switch (str) {
      case "YYYY":
        return date.getFullYear() + "";
      case "YY":
        return date.getFullYear() % 100 + "";
      case "MM":
        return padStart.padStart(date.getMonth() + 1);
      case "M":
        return date.getMonth() + 1 + "";
      case "DD":
        return padStart.padStart(date.getDate());
      case "D":
        return date.getDate() + "";
      case "hh":
        return padStart.padStart(date.getHours());
      case "h":
        return date.getHours() + "";
      case "mm":
        return padStart.padStart(date.getMinutes());
      case "m":
        return date.getMinutes() + "";
      case "ss":
        return padStart.padStart(date.getSeconds());
      case "s":
        return date.getSeconds() + "";
      case "SSS":
        return padStart.padStart(date.getMilliseconds(), 3);
      case "SS":
        return padStart.padStart(Math.floor(date.getMilliseconds() / 10));
      case "S":
        return Math.floor(date.getMilliseconds() / 100) + "";
      default:
        return "";
    }
  });
};

exports.dateFormat = dateFormat;
exports.default = dateFormat;
