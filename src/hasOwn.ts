import hasOwnProperty from './hasOwnProperty'
import isVoid from '@/isVoid'

/**
 * 判断key是否是对象自己的属性
 * @param obj 对象
 * @param prop 属性
 */
export const hasOwn = (obj: PropObj, prop: string | number | symbol) => {
  if (isVoid(obj)) {
    console.error(`${obj} is not a valid type`)
    return false
  }
  return hasOwnProperty.call(obj, prop) as boolean
}
export default hasOwn
