'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const downloadFile = (url, filename = "") => {
  if (!isString.isString(url)) {
    throw new Error(`参数错误: ${url}`);
  }
  const $download = document.createElement("a");
  $download.style.display = "none";
  $download.href = url;
  $download.setAttribute("download", filename);
  if (!$download.download) {
    $download.setAttribute("target", "_blank");
  }
  document.body.appendChild($download);
  $download.click();
  document.body.removeChild($download);
};

exports.default = downloadFile;
exports.downloadFile = downloadFile;
