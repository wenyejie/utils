'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isBlob = (obj) => toRawType.toRawType(obj) === "blob";

exports.default = isBlob;
exports.isBlob = isBlob;
