"use strict";
var _a;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const storage = require("./storage.cjs");
const session = storage.storage((_a = globalThis.globalThis) == null ? void 0 : _a.sessionStorage);
exports.session = session;
