/**
 * 判断一个数据是否为string类型
 * @param obj
 */
const isString = obj => typeof obj === 'string' && obj.trim().length > 0

export default isString
