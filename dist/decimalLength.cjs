'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isNumber = require('./isNumber.cjs');
const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const INTEGER_BIT = /^\d+\.?/;
const decimalLength = (number) => {
  if (isString.isString(number)) {
    number = +number;
  }
  if (!isNumber.isNumber(number)) {
    return 0;
  }
  return `${number}`.replace(INTEGER_BIT, "").length;
};

exports.decimalLength = decimalLength;
exports.default = decimalLength;
