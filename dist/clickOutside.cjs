"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isParentElement = require("./isParentElement.cjs");
const clickOutside = (element, callback, once) => {
  const docClick = (event) => {
    if (isParentElement.isParentElement(element, event == null ? void 0 : event.target)) {
      return;
    }
    callback();
  };
  document.addEventListener("click", docClick, { once });
  return () => {
    document.removeEventListener("click", docClick);
  };
};
exports.clickOutside = clickOutside;
