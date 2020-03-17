import isPrimitive from './isPrimitive'
import isArray from './isArray'

/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
const clone = (obj: any, deep = true, weakMap: WeakMap<object, any> = new WeakMap()): any => {
  if (isPrimitive(obj)) {
    return obj
  }

  if (weakMap.get(obj)) {
    return weakMap.get(obj)
  }

  const result: [] | {} = isArray(obj) ? [] : {}
  weakMap.set(obj, result)
  const keys = Object.keys(obj)
  let key: PropertyKey
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i]
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key]
  }
  return result
}
