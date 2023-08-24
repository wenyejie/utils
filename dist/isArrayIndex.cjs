'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArrayIndex = (arr, inx) => {
  return inx >= 0 && inx < arr.length;
};

exports.default = isArrayIndex;
exports.isArrayIndex = isArrayIndex;
