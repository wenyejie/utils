"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const decapitalize = (str) => {
  return str.replace(/(\w+)/gi, (substr) => substr.charAt(0).toLowerCase() + substr.slice(1));
};
exports.decapitalize = decapitalize;
