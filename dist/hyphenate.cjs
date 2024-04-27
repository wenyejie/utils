"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase();
exports.hyphenate = hyphenate;
