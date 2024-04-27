"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isSymbol = (obj) => toRawType.toRawType(obj) === "symbol";
exports.isSymbol = isSymbol;
