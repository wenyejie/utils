import type { PropObj } from '../types'

/**
 * 判断key是否是对象自己的属性
 * @param obj 对象
 * @param prop 属性
 */
export const hasOwn = (obj: PropObj, prop:  PropertyKey) => Object.hasOwn(obj, prop)
