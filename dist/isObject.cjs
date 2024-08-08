"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isObject = (obj) => toRawType.toRawType(obj) === "object";
exports.isObject = isObject;
