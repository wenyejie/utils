import toRawType from './toRawType'

/**
 * 判断是否为对象
 * @param obj
 */
export const isPlainObject = obj => toRawType(obj) === 'object'

export default isPlainObject
