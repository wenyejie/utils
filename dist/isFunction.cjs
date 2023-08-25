'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isFunction = (obj) => toRawType.toRawType(obj) === "function";

exports.default = isFunction;
exports.isFunction = isFunction;
