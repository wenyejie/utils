"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const regexp = require("./regexp.cjs");
const url2https = (url) => {
  if (!isString.isString(url)) {
    console.error(`"${url}" is not a string`);
    return "";
  }
  if (regexp.rHttps.test(url)) {
    return url;
  }
  return url.replace(regexp.rHttp, "https");
};
exports.url2https = url2https;
