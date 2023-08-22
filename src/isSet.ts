import toRawType from './toRawType'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
export const isSet = (obj:any) => toRawType(obj) === 'set'

export default isSet
