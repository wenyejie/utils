"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hyphenate = require("./hyphenate.cjs");
const globalThis = require("./globalThis.cjs");
const supportCSS = (prop, value) => {
  var _a, _b, _c;
  return (_c = (_b = (_a = globalThis.globalThis) == null ? void 0 : _a.CSS) == null ? void 0 : _b.supports) == null ? void 0 : _c.call(_b, hyphenate.hyphenate(prop), value);
};
exports.supportCSS = supportCSS;
