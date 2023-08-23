import { isPrimitive } from './isPrimitive.js';
import { isArray } from './isArray.js';
import { isFunction } from './isFunction.js';
import { isSet } from './isSet.js';
import { isMap } from './isMap.js';
import { isJson } from './isJson.js';
import { isWeakMap } from './isWeakMap.js';
import { isWeakSet } from './isWeakSet.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const clone = (obj, deep = true, weakMap = /* @__PURE__ */ new WeakMap()) => {
  if (isPrimitive(obj) || isFunction(obj)) {
    return obj;
  }
  if (isSet(obj)) {
    return new Set(obj);
  }
  if (isWeakSet(obj)) {
    return new WeakSet(obj);
  }
  if (isMap(obj)) {
    return new Map(obj);
  }
  if (isWeakMap(obj)) {
    return new WeakMap(obj);
  }
  if (!isJson(obj)) {
    return obj;
  }
  if (weakMap.get(obj)) {
    return weakMap.get(obj);
  }
  const result = isArray(obj) ? [] : {};
  weakMap.set(obj, result);
  const keys = Object.keys(obj);
  let key;
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i];
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key];
  }
  return result;
};

export { clone, clone as default };
