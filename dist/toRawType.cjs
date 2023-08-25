'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toTypeString = require('./toTypeString.cjs');
const decapitalize = require('./decapitalize.cjs');
require('./objectToString.cjs');

const toRawType = (obj) => {
  return decapitalize.decapitalize(toTypeString.toTypeString(obj).slice(8, -1));
};

exports.default = toRawType;
exports.toRawType = toRawType;
