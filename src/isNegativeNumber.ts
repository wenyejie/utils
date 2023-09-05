import isNumber from '@/isNumber'

/**
 * 判断是否为负数
 * @param obj 数字
 */
export const isNegativeNumber = (obj: unknown) => isNumber(obj) && <number>obj < 0

export default isNegativeNumber
