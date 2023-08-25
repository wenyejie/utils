'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArray = require('./isArray.cjs');
const isObject = require('./isObject.cjs');
const hasOwn = require('./hasOwn.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const each = (data, fn) => {
  if (!isArray.isArray(data) && !isObject.isObject(data)) {
    return;
  }
  if (isArray.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (fn.call(data[i], data[i], i, data) === false) {
        return;
      }
    }
  } else {
    for (let key in data) {
      if (!hasOwn.hasOwn(data, key)) {
        continue;
      }
      if (fn.call(data[key], data[key], key, data) === false) {
        return;
      }
    }
  }
};

exports.default = each;
exports.each = each;
