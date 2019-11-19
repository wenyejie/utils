import { isArray, isObject } from './index.js'

/**
 * 对对象进行拷贝
 * @param obj {*} 拷贝对象
 * @param deep? {Boolean} 是否深拷贝, 默认为true
 * @param weakMap? {WeakMap} 引用对象
 * @return {*}
 */
export const clone = (obj, deep = true, weakMap = new WeakMap()) => {
  if (!isObject(obj)) {
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
