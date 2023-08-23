import isInteger from './isInteger'

/**
 * 判断是否为自然数(包括0)
 * @param obj 对象
 */
export const isNaturalNumber = (obj: number) => isInteger(obj) && obj >= 0

export default isNaturalNumber
