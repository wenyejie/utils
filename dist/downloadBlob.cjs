'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const downloadFile = require('./downloadFile.cjs');
const isBlob = require('./isBlob.cjs');
const suffix = require('./suffix.cjs');
const globalThis = require('./globalThis.cjs');
require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const downloadBlob = (blob, filename) => {
  if (!isBlob.isBlob(blob)) {
    throw new Error("参数错误: blob不是Blob类型");
  }
  if (!suffix.suffix(filename)) {
    filename = filename + "." + blob.type.replace(/image\//, "");
    console.warn("参数错误: filename没有后缀名");
  }
  if (globalThis.default.navigator?.["msSaveBlob"]) {
    globalThis.default.navigator?.["msSaveBlob"](blob, filename);
    return;
  }
  const url = globalThis.default.URL.createObjectURL(blob);
  downloadFile.downloadFile(url, filename);
  globalThis.default.URL.revokeObjectURL(url);
};

exports.default = downloadBlob;
exports.downloadBlob = downloadBlob;
