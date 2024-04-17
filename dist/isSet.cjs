"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isSet = (obj) => toRawType.toRawType(obj) === "set";
exports.isSet = isSet;
