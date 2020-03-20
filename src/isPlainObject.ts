import toRawType from './toRawType'

/**
 * 判断是否为对象
 * @param obj
 */
const isPlainObject = obj => toRawType(obj) === 'object'

export default isPlainObject
