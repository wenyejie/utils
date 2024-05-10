"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toRawType = require("./toRawType.cjs");
const normalizeOptions = (options, defaultOptions, types) => {
  const type = toRawType.toRawType(options);
  if (type === "undefined") {
    return { ...defaultOptions };
  }
  if (type === "object") {
    return { ...defaultOptions, ...options };
  }
  const innerOptions = { ...defaultOptions };
  if (toRawType.toRawType(types) === "object") {
    innerOptions[types[type]] = options;
  } else {
    for (const [key, value] of Object.entries(defaultOptions)) {
      if (toRawType.toRawType(value) === type) {
        innerOptions[key] = options;
        break;
      }
    }
  }
  return innerOptions;
};
exports.normalizeOptions = normalizeOptions;
