"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isText = (obj) => (obj == null ? void 0 : obj["nodeType"]) === 3;
exports.isText = isText;
