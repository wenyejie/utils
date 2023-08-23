'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isMap = (obj) => toRawType.toRawType(obj) === "map";

exports.default = isMap;
exports.isMap = isMap;
