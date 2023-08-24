import isPrimitive from './isPrimitive'
import isArray from './isArray'
import isFunction from './isFunction'
import isSet from './isSet'
import isMap from './isMap'
import isJson from './isJson'
import isWeakMap from './isWeakMap'
import isWeakSet from './isWeakSet'

type ArrayOrObject = any[] | PropObj

/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
export const clone = <T>(obj: T, deep = true, weakMap = new WeakMap()): T => {
  if (isPrimitive(obj) || isFunction(obj)) {
    return obj
  }

  if (isSet(obj)) {
    return new Set(obj as Iterable<any>) as T
  }

  if (isWeakSet(obj)) {
    return new WeakSet(obj as Iterable<any>) as T
  }

  if (isMap(obj)) {
    return new Map(obj as Iterable<any>) as T
  }

  if (isWeakMap(obj)) {
    return new WeakMap(obj as Iterable<any>) as T
  }

  if (!isJson(obj)) {
    return obj
  }

  if (weakMap.get(obj as ArrayOrObject)) {
    return weakMap.get(obj as ArrayOrObject)
  }

  const result = isArray(obj) ? [] : {}
  weakMap.set(obj as ArrayOrObject, result)
  const keys = Object.keys(obj)
  let key: string
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i]
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key]
  }
  return result as T
}

export default clone
