"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isComment = (obj) => (obj == null ? void 0 : obj["nodeType"]) === 8;
exports.isComment = isComment;
