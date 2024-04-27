"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const capitalize = (str) => {
  return str.replace(/(\w+)/gi, (substr) => substr.charAt(0).toUpperCase() + substr.slice(1));
};
exports.capitalize = capitalize;
