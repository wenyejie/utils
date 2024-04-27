import { toRawType } from './toRawType'

/**
 * 判断是否为blob类型
 * @param obj
 */
export const isBlob = (obj: unknown) => toRawType(obj) === 'blob'

