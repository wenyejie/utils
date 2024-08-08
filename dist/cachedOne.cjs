"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const once = require("./once.cjs");
const cachedOne = once.once;
exports.cachedOne = cachedOne;
