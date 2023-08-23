'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const unique = (array) => {
  return Array.from(new Set(array));
};

exports.default = unique;
exports.unique = unique;
