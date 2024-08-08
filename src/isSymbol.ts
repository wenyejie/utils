import { toRawType } from './toRawType'

/**
 * 判断是否为symbol类型
 * @param obj
 */
export const isSymbol = (obj: unknown) => toRawType(obj) === 'symbol'

