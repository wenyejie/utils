"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isRegExp = (obj) => toRawType.toRawType(obj) === "regexp";
exports.isRegExp = isRegExp;
