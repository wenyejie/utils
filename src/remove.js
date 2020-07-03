import isArray from './isArray.js'

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
