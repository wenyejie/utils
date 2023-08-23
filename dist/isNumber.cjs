'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isNumber = (obj) => toRawType.toRawType(obj) === "number" && !Number.isNaN(obj);

exports.default = isNumber;
exports.isNumber = isNumber;
