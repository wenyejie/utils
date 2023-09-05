/**
 * 判断一个对象是否为数字类型
 * @param obj
 */
export const isNumber = (obj: any) => typeof obj === 'number' && !Number.isNaN(obj)

export default isNumber
