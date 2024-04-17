"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const removeSpace = require("./removeSpace.cjs");
const bankCardFormat = (card) => {
  if (!isString.isString(card)) {
    console.error(`"${card}" is not a string`);
    return "";
  }
  return removeSpace.removeSpace(card).replace(/(\d{4}(?=\d))/g, "$1 ");
};
exports.bankCardFormat = bankCardFormat;
