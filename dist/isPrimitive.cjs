'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const isPrimitive = (obj) => {
  const type = toRawType.toRawType(obj);
  return type === "string" || type === "number" || type === "boolean" || type === "bigint" || type === "symbol" || type === "undefined" || type === "null";
};

exports.default = isPrimitive;
exports.isPrimitive = isPrimitive;
