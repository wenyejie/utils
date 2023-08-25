'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isWeakSet = (obj) => toRawType.toRawType(obj) === "weakSet";

exports.default = isWeakSet;
exports.isWeakSet = isWeakSet;
