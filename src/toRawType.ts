import { decapitalize } from './decapitalize'

// Object.prototype.toString的封装, 主要用于提供性能
export const objectToString = Object.prototype.toString

/**
 * 返回对象的类型 ex. [object string] [object number]
 * @param obj 对象
 */
export const toTypeString = (obj: unknown): string => {
  return objectToString.call(obj).toLocaleLowerCase()
}

export type ToRawType = 'string'
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

/**
 * 返回数据的类型 ex. string, number, boolean
 * @param obj 对象
 */
export const toRawType = (obj: unknown) => {
  return decapitalize(toTypeString(obj).slice(8, -1)) as ToRawType
}

