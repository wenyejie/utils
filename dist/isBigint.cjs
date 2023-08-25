'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isBigint = (obj) => toRawType.toRawType(obj) === "bigint";

exports.default = isBigint;
exports.isBigint = isBigint;
