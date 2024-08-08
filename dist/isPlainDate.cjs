"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isPlainDate = (obj) => toRawType.toRawType(obj) === "date";
exports.isPlainDate = isPlainDate;
