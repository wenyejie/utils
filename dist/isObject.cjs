'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isObject = (obj) => toRawType.toRawType(obj) === "object";

exports.default = isObject;
exports.isObject = isObject;
