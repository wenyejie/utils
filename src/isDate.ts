/**
 * 判断一个数据是否为正确的date类型
 * @param obj 对象
 */
export const isDate = (obj: unknown) => obj instanceof Date && obj.toString() !== 'Invalid Date'

export default isDate
