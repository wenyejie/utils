import isInteger from './isInteger'
/**
 * 判断是否为自然数(包括0)
 * @param obj
 */
export const isNaturalNumber = obj => isInteger(obj) && obj >= 0

export default isNaturalNumber
