import toTypeString from './toTypeString'
import decapitalize from './decapitalize'

/**
 * 返回数据的类型 ex. string, number, boolean
 * @param obj 对象
 */
export const toRawType = (obj: unknown) => {
  return decapitalize(toTypeString(obj).slice(8, -1)) as
    | 'string'
    | 'number'
    | 'null'
    | 'undefined'
    | 'object'
    | 'function'
    | 'symbol'
    | 'set'
    | 'map'
    | 'weakMap'
    | 'weakSet'
    | 'date'
    | 'array'
    | 'boolean'
    | 'bigint'
    | 'blob'
    | 'regexp'
}

export default toRawType
