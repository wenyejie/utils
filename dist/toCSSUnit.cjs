'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isNumber = require('./isNumber.cjs');
const isString = require('./isString.cjs');
const regexp = require('./regexp.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const toCSSUnit = (number, defaultUnit = "px") => {
  if (isNumber.isNumber(number) || regexp.rInteger.test(number)) {
    return number + defaultUnit;
  } else if (isString.isString(number)) {
    return number;
  } else {
    return "";
  }
};

exports.default = toCSSUnit;
exports.toCSSUnit = toCSSUnit;
