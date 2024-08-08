"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const regexp = require("./regexp.cjs");
const url2http = (url) => {
  if (!isString.isString(url)) {
    console.error(`"${url}" is not a string`);
    return "";
  }
  if (!regexp.rHttp.test(url)) {
    return url;
  }
  return url.replace(regexp.rHttps, "http");
};
exports.url2http = url2http;
