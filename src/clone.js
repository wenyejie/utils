import isPrimitive from './isPrimitive.js'
import isArray from './isArray.js'
import isFunction from './isFunction.js'
import isSymbol from './isSymbol.js'
import isSet from './isSet.js'
import isMap from './isMap.js'
import isJson from './isJson.js'
import isWeakMap from './isWeakMap.js'
import isWeakSet from './isWeakSet.js'

/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
export const clone = (obj, deep = true, weakMap = new WeakMap()) => {
  if (isPrimitive(obj) || isFunction(obj)) {
    return obj
  }

  if (isSet(obj)) {
    return new Set(obj)
  }

  if (isWeakSet(obj)) {
    return new WeakSet(obj)
  }

  if (isMap(obj)) {
    return new Map(obj)
  }

  if (isWeakMap(obj)) {
    return new WeakMap(obj)
  }

  if (!isJson(obj)) {
    return obj
  }

  if (weakMap.get(obj)) {
    return weakMap.get(obj)
  }

  const result = isArray(obj) ? [] : {}
  weakMap.set(obj, result)
  const keys = Object.keys(obj)
  let key
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i]
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key]
  }
  return result
}

export default clone
