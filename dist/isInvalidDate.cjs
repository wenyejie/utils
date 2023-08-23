'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isInvalidDate = (obj) => toRawType.toRawType(obj) === "date" && obj.toString() === "Invalid Date";

exports.default = isInvalidDate;
exports.isInvalidDate = isInvalidDate;
