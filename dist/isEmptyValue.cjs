'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArray = require('./isArray.cjs');
const isObject = require('./isObject.cjs');
const objectLength = require('./objectLength.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isEmptyValue = (value) => {
  return value === void 0 || value === null || value === "" || Number.isNaN(value) || isArray.isArray(value) && value.length === 0 || isObject.isObject(value) && objectLength.objectLength(value) === 0;
};

exports.default = isEmptyValue;
exports.isEmptyValue = isEmptyValue;
