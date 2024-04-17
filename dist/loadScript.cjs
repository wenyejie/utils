"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const load = require("./load.cjs");
const loadScript = (url, options) => {
  return load.load("script", url, options);
};
exports.loadScript = loadScript;
