'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const isInteger = require('./isInteger.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const phoneNumFormat = (phone) => {
  if (isInteger.isInteger(phone)) {
    phone += "";
  }
  if (isString.isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  }
  return "";
};

exports.default = phoneNumFormat;
exports.phoneNumFormat = phoneNumFormat;
