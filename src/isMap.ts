import toRawType from './toRawType'

/**
 * 判断一个数据是否为map类型
 * @param obj 对象
 */
export const isMap = (obj: unknown) => toRawType(obj) === 'map'

export default isMap
