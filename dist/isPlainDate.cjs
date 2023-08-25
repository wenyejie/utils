'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isPlainDate = (obj) => toRawType.toRawType(obj) === "date";

exports.default = isPlainDate;
exports.isPlainDate = isPlainDate;
