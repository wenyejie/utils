'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isString = (obj) => toRawType.toRawType(obj) === "string" && obj.trim().length > 0;

exports.default = isString;
exports.isString = isString;
