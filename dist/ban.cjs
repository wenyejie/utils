"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const ban = (obj, ...rest) => {
  if (!isObject.isObject(obj)) {
    console.error(`"${obj}" is not a object`);
    return;
  }
  let result = {};
  result = { ...obj };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};
exports.ban = ban;
