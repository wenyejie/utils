import { toRawType } from './toRawType'

/**
 * 判断是否为正则表达式
 * @param obj 对象
 */
export const isRegExp = (obj: unknown) => toRawType(obj) === 'regexp'

