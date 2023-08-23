'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const objectToString = require('./objectToString.cjs');

const toTypeString = (obj) => {
  return objectToString.objectToString.call(obj).toLocaleLowerCase();
};

exports.default = toTypeString;
exports.toTypeString = toTypeString;
