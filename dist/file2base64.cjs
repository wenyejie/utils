"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const file2base64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
exports.file2base64 = file2base64;
