import toRawType from './toRawType.js'

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
export const isWeakMap = obj => toRawType(obj) === 'weakmap'

export default isWeakMap
