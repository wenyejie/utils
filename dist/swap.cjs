'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const hasOwn = require('./hasOwn.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const swap = (obj, i, j) => {
  if (!hasOwn.hasOwn(obj, i) || !hasOwn.hasOwn(obj, j)) {
    return obj;
  }
  const temp = obj[i];
  obj[i] = obj[j];
  obj[j] = temp;
  return obj;
};

exports.default = swap;
exports.swap = swap;
