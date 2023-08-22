import toRawType from './toRawType'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
export const isDate = (obj: any) => toRawType(obj) === 'date' && obj.toString() !== 'Invalid Date'

export default isDate
