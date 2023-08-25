'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isWeakMap = (obj) => toRawType.toRawType(obj) === "weakMap";

exports.default = isWeakMap;
exports.isWeakMap = isWeakMap;
