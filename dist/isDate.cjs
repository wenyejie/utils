'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isDate = (obj) => toRawType.toRawType(obj) === "date" && obj.toString() !== "Invalid Date";

exports.default = isDate;
exports.isDate = isDate;
