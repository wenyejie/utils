"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const downloadFile = require("./downloadFile.cjs");
const isBlob = require("./isBlob.cjs");
const suffix = require("./suffix.cjs");
const globalThis = require("./globalThis.cjs");
const downloadBlob = (blob, filename) => {
  var _a, _b, _c, _d;
  if (!isBlob.isBlob(blob)) {
    console.error(`"${blob}" is not a Blob`);
    return;
  }
  if (!suffix.suffix(filename)) {
    filename = filename + "." + blob.type.replace(/image\//, "");
    console.warn("参数错误: filename没有后缀名");
  }
  if ((_b = (_a = globalThis.globalThis) == null ? void 0 : _a.navigator) == null ? void 0 : _b["msSaveBlob"]) {
    (_d = (_c = globalThis.globalThis) == null ? void 0 : _c.navigator) == null ? void 0 : _d["msSaveBlob"](blob, filename);
    return;
  }
  const url = globalThis.globalThis.URL.createObjectURL(blob);
  downloadFile.downloadFile(url, filename);
  globalThis.globalThis.URL.revokeObjectURL(url);
};
exports.downloadBlob = downloadBlob;
