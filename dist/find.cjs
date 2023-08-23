'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isArray = require('./isArray.cjs');
const isObject = require('./isObject.cjs');
const hasOwn = require('./hasOwn.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const find = (obj, key, value) => {
  const props = isObject.isObject(key) ? key : { [key]: value };
  if (!isArray.isArray(obj) || !isObject.isObject(props)) {
    return null;
  }
  return obj.find((item) => {
    if (!isObject.isObject(item)) {
      return false;
    }
    for (let key2 in props) {
      if (hasOwn.hasOwn(props, key2) && item[key2] !== props[key2]) {
        return false;
      }
    }
    return true;
  });
};

exports.default = find;
exports.find = find;
