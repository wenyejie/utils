import { toRawType } from './toRawType.js'

/**
 * 判断一个数据是否为date类型
 * @param obj 被判断的对象
 */
export const isPlainDate = (obj: unknown) => toRawType(obj) === 'date'

