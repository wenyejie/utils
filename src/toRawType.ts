import toTypeString from './toTypeString'

/**
 * 返回数据的类型 ex. string, number, boolean
 * @param obj
 */
export const toRawType = (obj:unknown) => {
  return toTypeString(obj)
    .slice(8, -1)
    .toLocaleLowerCase() as 'string' | 'number' | 'null' | 'undefined' | 'object' | 'function' | 'symbol' | 'set' | 'map' | 'weakmap' | 'weakset' | 'date' | 'array' | 'boolean' | 'bigint' | 'blob' | 'regexp'
}

export default toRawType
