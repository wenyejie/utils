import toRawType from './toRawType.js'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
export const isDate = obj => toRawType(obj) === 'date' && obj.toString() !== 'Invalid Date'

export default isDate
