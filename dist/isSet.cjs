'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isSet = (obj) => toRawType.toRawType(obj) === "set";

exports.default = isSet;
exports.isSet = isSet;
