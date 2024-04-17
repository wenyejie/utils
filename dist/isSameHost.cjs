"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const globalThis = require("./globalThis.cjs");
const isSameHost = (urlA, urlB) => {
  if (!isString.isString(urlA)) {
    console.error(`"${urlA}" is not a string`);
    return false;
  }
  const innerUrlA = new URL(urlA);
  let innerUrlB = isString.isString(urlB) ? new URL(urlB) : globalThis.globalThis.location;
  return innerUrlA.host === innerUrlB.host;
};
exports.isSameHost = isSameHost;
