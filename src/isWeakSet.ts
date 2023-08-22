import toRawType from './toRawType'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
export const isWeakSet = (obj: unknown) => toRawType(obj) === 'weakset'

export default isWeakSet
