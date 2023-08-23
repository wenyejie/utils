'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArray = require('./isArray.cjs');

const unique = (array) => {
  if (!isArray.isArray(array)) {
    return array;
  }
  return Array.from(new Set(array));
};

exports.default = unique;
exports.unique = unique;
