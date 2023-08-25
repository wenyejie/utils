'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isObject = require('./isObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const ban = (obj, ...rest) => {
  let result = {};
  if (!isObject.isObject(obj)) {
    return result;
  }
  result = { ...obj };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};

exports.ban = ban;
exports.default = ban;
