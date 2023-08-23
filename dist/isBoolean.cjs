'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isBoolean = (obj) => toRawType.toRawType(obj) === "boolean";

exports.default = isBoolean;
exports.isBoolean = isBoolean;
