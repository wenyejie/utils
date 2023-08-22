import hasOwnProperty from './hasOwnProperty'
import isUndefined from './isUndefined'

/**
 * 判断key是否是对象自己的属性
 * @param object { Object }
 * @param key { string }
 */
export const hasOwn = (object:Record<PropertyKey, any>, key:string | number | symbol) => {
  if (isUndefined(object)) {
    return false
  }
  return hasOwnProperty.call(object, key) as boolean
}
export default hasOwn
