"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hasFocus = (element) => {
  return document.hasFocus() && document.activeElement === element;
};
exports.hasFocus = hasFocus;
