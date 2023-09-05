import isNumber from '@/isNumber'

/**
 * 判断是否为正数
 * @param obj 数字
 */
export const isPositiveNumber = (obj: unknown) => isNumber(obj) && <number>obj > 0

export default isPositiveNumber
