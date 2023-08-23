'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isWeakMap = (obj) => toRawType.toRawType(obj) === "weakmap";

exports.default = isWeakMap;
exports.isWeakMap = isWeakMap;
