import toRawType from './toRawType'

/**
 * 判断一个数据是否为string类型
 * @param obj
 */
export const isString = (obj: any) => toRawType(obj) === 'string' && obj.trim().length > 0

export default isString
