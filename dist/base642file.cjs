"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const hasSuffix = require("./hasSuffix.cjs");
const base642file = (base64, filename) => {
  const array = base64.split(",");
  const type = array[0].match(/:(.*?);/)[1];
  const decodedData = globalThis.globalThis.atob(array[1]);
  let length = decodedData.length;
  const uint8Array = new Uint8Array(length);
  while (length--) {
    uint8Array[length] = decodedData.charCodeAt(length);
  }
  filename = hasSuffix.hasSuffix(filename) ? filename : `${filename}.${type.substring(6)}`;
  return new File([uint8Array], filename, { type });
};
exports.base642file = base642file;
