import toRawType from './toRawType'

/**
 * 判断一个数据是否为date类型
 * @param obj 被判断的对象
 */
export const isPlainDate = obj => toRawType(obj) === 'date'

export default isPlainDate
