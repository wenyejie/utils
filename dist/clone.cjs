"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isPrimitive = require("./isPrimitive.cjs");
const toRawType = require("./toRawType.cjs");
const linkIterableObj = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
};
const clone = (obj, deep = true, weakMap = /* @__PURE__ */ new WeakMap()) => {
  const type = toRawType.toRawType(obj);
  if (isPrimitive.isPrimitive(obj) || type === "function") {
    return obj;
  }
  if (type in linkIterableObj) {
    return new linkIterableObj[type](obj);
  }
  if (weakMap.get(obj)) {
    return weakMap.get(obj);
  }
  const result = type === "array" ? [] : {};
  weakMap.set(obj, result);
  const keys = Object.keys(obj);
  let key;
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i];
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key];
  }
  return result;
};
exports.clone = clone;
