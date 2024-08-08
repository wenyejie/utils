"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isWeakMap = (obj) => toRawType.toRawType(obj) === "weakMap";
exports.isWeakMap = isWeakMap;
