import hasOwnProperty from './hasOwnProperty'
import isUndefined from './isUndefined'
import isNull from './isNull'

/**
 * 判断key是否是对象自己的属性
 * @param obj 对象
 * @param prop 属性
 */
export const hasOwn = (obj:Record<PropertyKey, any>, prop:string | number | symbol) => {
  if (isUndefined(obj) || isNull(obj)) {
    return false
  }
  return hasOwnProperty.call(obj, prop) as boolean
}
export default hasOwn
