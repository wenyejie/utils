import toRawType from './toRawType'

/**
 * 判断数据是不是Boolean类型
 * @param obj
 */
export const isBoolean = (obj:unknown) => toRawType(obj) === 'boolean'

export default isBoolean
