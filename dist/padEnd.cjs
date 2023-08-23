'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isUndefined = require('./isUndefined.cjs');

const padEnd = (obj, maxLength = 2, fillString = "0") => {
  if (isUndefined.isUndefined(obj) || Number.isNaN(obj)) {
    obj = "";
  }
  return `${obj}`.padEnd(maxLength, fillString);
};

exports.default = padEnd;
exports.padEnd = padEnd;
