'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isRegExp = (obj) => toRawType.toRawType(obj) === "regexp";

exports.default = isRegExp;
exports.isRegExp = isRegExp;
