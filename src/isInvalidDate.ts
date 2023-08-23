import toRawType from './toRawType'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj 对象
 */
export const isInvalidDate = (obj: unknown) => toRawType(obj) === 'date' && obj.toString() === 'Invalid Date'

export default isInvalidDate
