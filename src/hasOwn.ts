import hasOwnProperty from './hasOwnProperty'

/**
 * 判断key是否是对象自己的属性
 * @param object
 * @param key
 */
export const hasOwn = (object: {}, key: PropertyKey): boolean => {
  if (object === null || object === undefined) {
    return false
  }
  return hasOwnProperty.call(object, key)
}
export default hasOwn
