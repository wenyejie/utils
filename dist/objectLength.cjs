'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isObject = require('./isObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const objectLength = (obj) => {
  if (!isObject.isObject(obj)) {
    return 0;
  }
  return Object.keys(obj).length;
};

exports.default = objectLength;
exports.objectLength = objectLength;
