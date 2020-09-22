import isInteger from './isInteger.js'

/**
 * 判断是否为偶数
 * PS: 0也是偶数, 0是一个特殊的偶数。它既是正偶数与负偶数的分界线，又是正奇数与负奇数的分水岭。
 * @param obj
 */
export const isEvenNumber = obj => isInteger(obj) && obj % 2 === 0

export default isEvenNumber
