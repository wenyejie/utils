import { toRawType } from './toRawType'

/**
 * 判断一个数据是否为正确的set类型
 * @param obj 对象
 */
export const isSet = (obj: unknown) => toRawType(obj) === 'set'

