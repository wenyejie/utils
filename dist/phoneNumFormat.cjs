"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const phoneNumFormat = (phone) => {
  if (Number.isInteger(phone)) {
    phone += "";
  }
  if (isString.isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  }
  return "";
};
exports.phoneNumFormat = phoneNumFormat;
