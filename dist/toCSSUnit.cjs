'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isNumber = require('./isNumber.cjs');
const isString = require('./isString.cjs');
const regexp = require('./regexp.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const toCSSUnit = (value, unit = "px") => {
  if (isNumber.isNumber(value) || regexp.rInteger.test(value)) {
    return value + unit;
  } else if (isString.isString(value)) {
    return value;
  } else {
    return "";
  }
};

exports.default = toCSSUnit;
exports.toCSSUnit = toCSSUnit;
