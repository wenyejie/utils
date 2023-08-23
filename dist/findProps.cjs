'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const find = require('./find.cjs');
const isObject = require('./isObject.cjs');
require('./isArray.cjs');
require('./hasOwn.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const findProps = (data, propValue, propKey = "value", returnKey = "label") => {
  const item = find.find(data, propKey, propValue);
  return isObject.isObject(item) ? item[returnKey] : "";
};

exports.default = findProps;
exports.findProps = findProps;
