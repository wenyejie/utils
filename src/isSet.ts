import toRawType from './toRawType'

/**
 * 判断一个数据是否为正确的set类型
 * @param obj
 */
export const isSet = (obj:unknown) => toRawType(obj) === 'set'

export default isSet
