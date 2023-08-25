'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArrayIndex = (arr, index) => {
  return index >= 0 && index < arr.length;
};

exports.default = isArrayIndex;
exports.isArrayIndex = isArrayIndex;
