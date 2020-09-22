import toTypeString from './toTypeString.js'

/**
 * 返回数据的类型
 * @param obj 返回类型的对象
 */
export const toRawType = obj =>
  toTypeString(obj)
    .slice(8, -1)
    .toLocaleLowerCase()

export default toRawType
