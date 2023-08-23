'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const hasOwnProperty = require('./hasOwnProperty.cjs');
const isUndefined = require('./isUndefined.cjs');
const isNull = require('./isNull.cjs');

const hasOwn = (obj, prop) => {
  if (isUndefined.isUndefined(obj) || isNull.isNull(obj)) {
    return false;
  }
  return hasOwnProperty.hasOwnProperty.call(obj, prop);
};

exports.default = hasOwn;
exports.hasOwn = hasOwn;
