import hasOwnProperty from './hasOwnProperty.js'
import isUndefined from './isUndefined.js'

/**
 * 判断key是否是对象自己的属性
 * @param object { Object }
 * @param key { string }
 */
export const hasOwn = (object, key) => {
  if (isUndefined(object)) {
    return false
  }
  return hasOwnProperty.call(object, key)
}
export default hasOwn
