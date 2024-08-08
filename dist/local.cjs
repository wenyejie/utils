"use strict";
var _a;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const storage = require("./storage.cjs");
const local = storage.storage((_a = globalThis.globalThis) == null ? void 0 : _a.localStorage);
exports.local = local;
