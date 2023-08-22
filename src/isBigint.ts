import ToRawType from './toRawType'

/**
 * 判断数据是不是bigint类型
 * @param obj
 */
export const isBigint = (obj: unknown) => ToRawType(obj) === 'bigint'

export default isBigint
