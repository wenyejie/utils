"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isMap = (obj) => toRawType.toRawType(obj) === "map";
exports.isMap = isMap;
