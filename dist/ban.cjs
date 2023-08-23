'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isObject = require('./isObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const ban = (data, ...rest) => {
  let result = {};
  if (!isObject.isObject(data)) {
    return result;
  }
  result = { ...data };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};

exports.ban = ban;
exports.default = ban;
