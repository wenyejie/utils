import toRawType from './toRawType'

/**
 * 判断是否为函数
 * @param obj 对象
 */
export const isFunction = (obj: unknown) => toRawType(obj) === 'function'

export default isFunction
