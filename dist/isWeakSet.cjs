'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isWeakSet = (obj) => toRawType.toRawType(obj) === "weakset";

exports.default = isWeakSet;
exports.isWeakSet = isWeakSet;
