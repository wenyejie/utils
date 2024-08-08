import { isPrimitive } from "./isPrimitive.js";
import { toRawType } from "./toRawType.js";
const linkIterableObj = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
};
const clone = (obj, deep = true, weakMap = /* @__PURE__ */ new WeakMap()) => {
  const type = toRawType(obj);
  if (isPrimitive(obj) || type === "function") {
    return obj;
  }
  if (Object.hasOwn(linkIterableObj, type)) {
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
export {
  clone
};
