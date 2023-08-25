'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const isNumber = require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const spliceString = (string, start, deleteCount = 0, insertString = "") => {
  if (!isString.isString(string)) {
    return "";
  }
  if (!isNumber.isNumber(deleteCount) && insertString === "") {
    insertString = deleteCount;
    deleteCount = 0;
  }
  if (start < 0 || string.length < start || deleteCount < 0) {
    return string;
  }
  return string.substring(0, start) + insertString + string.substring(start + deleteCount, string.length);
};

exports.default = spliceString;
exports.spliceString = spliceString;
