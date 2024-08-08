"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const file2url = require("./file2url.cjs");
const file2image = (file) => {
  const image = document.createElement("img");
  image.src = file2url.file2url(file);
  return image;
};
exports.file2image = file2image;
