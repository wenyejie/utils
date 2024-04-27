"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const camelize = require("./camelize.cjs");
const getCSS = (elt, prop, pseudoElt) => {
  if (!isString.isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt);
  }
  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize.camelize(prop)];
};
exports.getCSS = getCSS;
