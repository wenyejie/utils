"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isWeakSet = (obj) => toRawType.toRawType(obj) === "weakSet";
exports.isWeakSet = isWeakSet;
