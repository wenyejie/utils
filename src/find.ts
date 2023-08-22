import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'

/**
 * 根据键值对从数组中查找子项
 * @param obj
 * @param key
 * @param value
 */
export const find = <P extends PropertyKey, T extends Record<P, any>>(obj: T[], key:P | T, value: any) => {
  const props = isObject(key) ? (key as T) : { [key as P]: value }
  if (!isArray(obj) || !isObject(props)) {
    return null
  }
  return obj.find(item => {
    if (!isObject(item)) {
      return false
    }
    for (let key in props) {
      if (hasOwn(props, key) && item[key] !== props[key]) {
        return false
      }
    }
    return true
  })
}

export default find
