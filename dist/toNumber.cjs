'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isNumber = require('./isNumber.cjs');
const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const toNumber = (num, defaultValue = 0) => {
  if (isString.isString(num)) {
    num = Number.parseFloat(num);
  }
  if (isNumber.isNumber(num)) {
    return num;
  }
  return defaultValue;
};

exports.default = toNumber;
exports.toNumber = toNumber;
