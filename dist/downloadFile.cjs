"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const downloadFile = (url, filename = "") => {
  if (!isString.isString(url)) {
    console.error(`"${url}" is not a string`);
    return;
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
exports.downloadFile = downloadFile;
