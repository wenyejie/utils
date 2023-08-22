import toRawType from './toRawType'

/**
 * 判断是否为原始类型
 * @param obj
 */
export const isPrimitive = (obj: unknown) => {
  const type = toRawType(obj)
  return (
    type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    type === 'bigint' ||
    type === 'symbol' ||
    type === 'undefined' ||
    type === 'null'
  )
}

export default isPrimitive
