'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const rSpace = /\s+/g;
const removeSpace = (string) => {
  if (!isString.isString(string)) {
    return "";
  }
  return string.replace(rSpace, "");
};

exports.default = removeSpace;
exports.removeSpace = removeSpace;
