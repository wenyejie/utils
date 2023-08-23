'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isPlainNumber = (obj) => toRawType.toRawType(obj) === "number";

exports.default = isPlainNumber;
exports.isPlainNumber = isPlainNumber;
