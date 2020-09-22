import objectToString from './objectToString.js'

/**
 * 返回对象的类型
 * @param obj
 */
export const toTypeString = obj => {
  return objectToString.call(obj).toLocaleLowerCase()
}

export default toTypeString
