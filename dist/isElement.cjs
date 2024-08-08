"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isElement = (obj) => (obj == null ? void 0 : obj["nodeType"]) === 1;
exports.isElement = isElement;
