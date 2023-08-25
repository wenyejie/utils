'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toRawType = require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isPrimitive = (obj) => {
  const type = toRawType.toRawType(obj);
  switch (type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
      return true;
    default:
      return false;
  }
};

exports.default = isPrimitive;
exports.isPrimitive = isPrimitive;
