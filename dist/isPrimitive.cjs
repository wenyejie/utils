"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
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
exports.isPrimitive = isPrimitive;
