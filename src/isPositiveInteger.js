import isInteger from './isInteger.js'

/**
 * 判断是否为正整数(不包括0)
 * @param obj
 */
export const isPositiveInteger = obj => isInteger(obj) && obj > 0

export default isPositiveInteger
