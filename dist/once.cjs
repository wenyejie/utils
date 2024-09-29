"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils = require("./utils.cjs");
const once = (fn, needRemove) => {
  let cached = utils.PLACEHOLDER;
  const rtnFn = function() {
    if (cached !== utils.PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    return cached;
  };
  if (needRemove) {
    return [rtnFn, () => cached = utils.PLACEHOLDER];
  } else {
    return rtnFn;
  }
};
exports.once = once;
