import isArray from './isArray.js'
import isObject from './isObject.js'
import hasOwn from './hasOwn.js'

/**
 * 通过属性移除子项
 * @param data { Array }
 * @param key { String | Object }
 * @param value {undefined | String | Number}
 * @return { Array }
 */
export const removeItemByProp = (data, key, value) => {
  const props = isObject(key) ? key : { [key]: value }
  if (!isArray(data) || !isObject(props)) {
    return array
  }
  return data.filter(item => {
    for (let key in props) {
      if (hasOwn(item, key) && item[key] !== props[key]) {
        return true
      }
    }
    return false
  })
}

/**
 * 移除数组中的元素, 会改变原数组
 *
 * pullOne([1,2,3,4], 1)
 *
 * @param array
 * @param value
 */
export const removeVal = (array, value) => {
  if (!isArray(array) || array.length <= 0) {
    return array
  }
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
  }
  return array
}

/**
 * 移除数组中的元素, 会改变原数组
 *
 * pull([1,2,3,4], 1)
 *
 * @param array
 * @param values
 */
export const remove = (array, ...values) => {
  if (!isArray(array) || values.length === 0) {
    return array
  }
  for (let i = 0; i < values.length; i++) {
    removeVal(array, values[i])
  }
  return array
}

export default remove
