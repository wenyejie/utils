"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isFunction = (obj) => toRawType.toRawType(obj) === "function";
exports.isFunction = isFunction;
