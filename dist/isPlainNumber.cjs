"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isPlainNumber = (obj) => toRawType.toRawType(obj) === "number";
exports.isPlainNumber = isPlainNumber;
