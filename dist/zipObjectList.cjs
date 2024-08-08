"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const zipObject = require("./zipObject.cjs");
const zipObjectList = (props, values) => values.map((value) => zipObject.zipObject(props, value));
exports.zipObjectList = zipObjectList;
