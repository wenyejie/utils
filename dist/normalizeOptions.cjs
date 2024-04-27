"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const normalizeOptions = (options, types, defaultOptions) => {
  const type = toRawType.toRawType(options);
  if (type === "undefined") {
    return { ...defaultOptions };
  }
  if (type === "object") {
    return { ...options };
  }
  const innerOptions = { ...defaultOptions };
  innerOptions[types[type]] = options;
  return innerOptions;
};
exports.normalizeOptions = normalizeOptions;
