"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isElement = require("./isElement.cjs");
const isParentElement = (parent, child, selfParent = true) => {
  if (!isElement.isElement(parent)) {
    console.error(`"${parent}" is not a HTMLElement`);
    return false;
  }
  if (!isElement.isElement(child)) {
    console.error(`"${child}" is not a HTMLElement`);
    return false;
  }
  if (!selfParent) {
    child = child.parentElement;
  }
  while (child !== null) {
    if (child === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
};
exports.isParentElement = isParentElement;
