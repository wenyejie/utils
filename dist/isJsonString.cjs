'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isJsonString = (obj) => {
  try {
    if (!isString.isString(obj)) {
      return false;
    }
    return JSON.parse(obj) && true;
  } catch (e) {
    return false;
  }
};

exports.default = isJsonString;
exports.isJsonString = isJsonString;
