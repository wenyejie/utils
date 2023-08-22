import toRawType from './toRawType'

/**
 * 判断是否为函数
 * @param obj
 */
export const isFunction = (obj: any) => toRawType(obj) === 'function'

export default isFunction
