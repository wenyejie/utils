import isInteger from './isInteger'

/**
 * 判断是否为正整数(不包括0)
 * @param obj
 */
export const isPositiveInteger = (obj: any) => isInteger(obj) && obj > 0

export default isPositiveInteger
