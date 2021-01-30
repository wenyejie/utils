import hasOwnProperty from './hasOwnProperty.js'

/**
 * 判断key是否是对象自己的属性
 * @param object { Object }
 * @param key { string }
 */
export const hasOwn = (object, key) => {
  if (object === null || object === undefined) {
    return false
  }
  return hasOwnProperty.call(object, key)
}
export default hasOwn
