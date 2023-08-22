import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'

/**
 * 通过属性移除子项
 * @param array
 * @param key
 * @param value
 */
export const removeItemByProp = <T>(array:T[], key: PropertyKey | Record<PropertyKey, any>, value:any):T[] => {
  const props = isObject(key) ? (key as Record<PropertyKey, any>) : { [key as PropertyKey]: value }
  if (!isArray(array) || !isObject(props)) {
    return array
  }
  return array.filter(item => {
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
export const removeVal = <T>(array:T[], value:any) => {
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
export const remove = <T>(array:T[], ...values: any[]) => {
  if (!isArray(array) || values.length === 0) {
    return array
  }
  for (let i = 0; i < values.length; i++) {
    removeVal(array, values[i])
  }
  return array
}
