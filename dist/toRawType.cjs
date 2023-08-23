'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toTypeString = require('./toTypeString.cjs');
require('./objectToString.cjs');

const toRawType = (obj) => {
  return toTypeString.toTypeString(obj).slice(8, -1).toLocaleLowerCase();
};

exports.default = toRawType;
exports.toRawType = toRawType;
