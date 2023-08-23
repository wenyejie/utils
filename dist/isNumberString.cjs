'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isNumberString = (obj) => {
  if (!isString.isString(obj)) {
    return false;
  }
  return (+obj).toString() === obj;
};

exports.default = isNumberString;
exports.isNumberString = isNumberString;
