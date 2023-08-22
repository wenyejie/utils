import objectToString from './objectToString'

/**
 * 返回对象的类型 ex. [object string] [object number]
 * @param obj
 */
export const toTypeString = (obj:unknown):string => {
  return objectToString.call(obj).toLocaleLowerCase()
}

export default toTypeString