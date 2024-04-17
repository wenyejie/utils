"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isBlob = (obj) => toRawType.toRawType(obj) === "blob";
exports.isBlob = isBlob;
