import { toRawType } from './toRawType'

/**
 * 判断是否为原始类型
 * @param obj 对象
 */
export const isPrimitive = (obj: unknown) => {
  const type = toRawType(obj)
  switch (type) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'bigint':
    case 'symbol':
    case 'undefined':
    case 'null':
      return true
    default:
      return false
  }
}

