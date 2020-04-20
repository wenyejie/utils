import objectToString from './objectToString'

/**
 * 返回对象的类型
 * @param obj
 */
export const toTypeString = (obj: any): string => {
  return objectToString.call(obj).toLocaleLowerCase()
}

export default toTypeString
