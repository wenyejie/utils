import { toRawType } from './toRawType'

/**
 * 判断是否为对象
 * @param obj
 */
export const isObject = (obj: unknown) => toRawType(obj) === 'object'

