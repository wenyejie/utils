"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const isInvalidDate = (obj) => toRawType.toRawType(obj) === "date" && obj.toString() === "Invalid Date";
exports.isInvalidDate = isInvalidDate;
