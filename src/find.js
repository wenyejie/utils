import isArray from './isArray.js'
import isObject from './isObject.js'
import hasOwn from './hasOwn.js'

/**
 * 根据键值对从数组中查找子项
 * @param data
 * @param key
 * @param value
 */
export const find = (data, key, value) => {
  const props = isObject(key) ? key : { key: value }
  if (!isArray(data) || !isObject(props)) {
    return null
  }
  return data.find(item => {
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
