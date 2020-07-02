import isInteger from './isInteger'

/**
 * 判断是否为奇数
 * @param number
 */
export const isOddNumber = number => isInteger(number) && number % 2 === 1

export default isOddNumber
