import isInteger from './isInteger'

/**
 * 判断是否为偶数
 * @param obj
 */
export const isEvenNumber = (obj: any) => isInteger(obj) && obj % 2 === 0

export default isEvenNumber
