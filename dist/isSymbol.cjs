'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isSymbol = (obj) => toRawType.toRawType(obj) === "symbol";

exports.default = isSymbol;
exports.isSymbol = isSymbol;
