import isInteger from './isInteger'

/**
 * 判断是否为奇数
 * @param number 数字
 */
export const isOddNumber = (number:number) => isInteger(number) && number % 2 === 1

export default isOddNumber
