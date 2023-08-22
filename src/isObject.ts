import toRawType from './toRawType'


/**
 * 判断是否为对象
 * @param obj
 */
export const isObject = (obj:any) => toRawType(obj) === 'object'

export default isObject
