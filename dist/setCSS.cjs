"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const camelize = require("./camelize.cjs");
const setCSS = (elt, prop, value) => {
  let styles = {};
  if (typeof prop === "string") {
    if (value === void 0 && prop.includes(":")) {
      elt.style.cssText = prop;
      return;
    }
    styles[prop] = value;
  } else {
    styles = prop;
  }
  for (const key in styles) {
    elt.style[camelize.camelize(key)] = styles[key];
  }
};
exports.setCSS = setCSS;
