'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isPrimitive = require('./isPrimitive.cjs');
const isArray = require('./isArray.cjs');
const isFunction = require('./isFunction.cjs');
const isSet = require('./isSet.cjs');
const isMap = require('./isMap.cjs');
const isJson = require('./isJson.cjs');
const isWeakMap = require('./isWeakMap.cjs');
const isWeakSet = require('./isWeakSet.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const clone = (obj, deep = true, weakMap = /* @__PURE__ */ new WeakMap()) => {
  if (isPrimitive.isPrimitive(obj) || isFunction.isFunction(obj)) {
    return obj;
  }
  if (isSet.isSet(obj)) {
    return new Set(obj);
  }
  if (isWeakSet.isWeakSet(obj)) {
    return new WeakSet(obj);
  }
  if (isMap.isMap(obj)) {
    return new Map(obj);
  }
  if (isWeakMap.isWeakMap(obj)) {
    return new WeakMap(obj);
  }
  if (!isJson.isJson(obj)) {
    return obj;
  }
  if (weakMap.get(obj)) {
    return weakMap.get(obj);
  }
  const result = isArray.isArray(obj) ? [] : {};
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
exports.default = clone;
