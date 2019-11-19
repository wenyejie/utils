import { hasOwn, isArray, isObject } from './index.js'

/**
 * 对对象进行拷贝
 * @param obj {*} 拷贝对象
 * @param deep? {Boolean} 是否深拷贝, 默认为true
 * @return {*}
 */
export const clone = (obj, deep = true) => {
  if (!isObject(obj)) {
    return obj
  }

  if (isArray(obj)) {
    return obj.map(item => (deep ? clone(item, deep) : item))
  }

  const newObj = {}
  for (let key in obj) {
    if (!hasOwn(obj, key)) {
      continue
    }
    newObj[key] = deep ? clone(obj[key], deep) : obj[key]
  }
  return newObj
}

export default clone
