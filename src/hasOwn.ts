import { isVoid } from './isVoid'
import type { PropKey, PropObj } from '../types'

// 判断是不是对象的自身属性
export const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 判断key是否是对象自己的属性
 * @param obj 对象
 * @param prop 属性
 */
export const hasOwn = (obj: PropObj, prop: PropKey) => {
  if (isVoid(obj)) {
    console.error(`"${ obj }" is not a valid type`)
    return false
  }
  return <boolean>hasOwnProperty.call(obj, prop)
}
