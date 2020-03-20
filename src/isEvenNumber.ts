import isInteger from './isInteger'

/**
 * 判断是否为偶数
 * @param obj
 */
const isEvenNumber = obj => isInteger(obj) && obj % 2 === 0

export default isEvenNumber
