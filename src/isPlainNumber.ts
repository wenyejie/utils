import { toRawType } from './toRawType'

/**
 * 判断是否为数字
 * @param obj
 */
export const isPlainNumber = (obj: unknown) => toRawType(obj) === 'number'

