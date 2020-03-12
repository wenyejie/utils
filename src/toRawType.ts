import toTypeString from './toTypeString'

/**
 * 返回数据的类型
 * @param obj
 */
const toRawType = (obj:any):string => toTypeString(obj).slice(-8, -1).toLocaleLowerCase()

export default toRawType
