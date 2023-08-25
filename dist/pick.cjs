'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isObject = require('./isObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const pick = (obj, ...rest) => {
  const result = {};
  if (isObject.isObject(obj)) {
    rest.forEach((key) => {
      result[key] = obj[key];
    });
  }
  return result;
};

exports.default = pick;
exports.pick = pick;
