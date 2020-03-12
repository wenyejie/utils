/**
 * 判断是否为原始类型
 * @param obj
 */
const isPrimitive = (obj) => {
  const type = typeof obj
  return type === 'string' || type === 'number' || type === 'boolean' || type === 'bigint' || type === 'symbol' || obj === undefined || obj === null
}

export default isPrimitive
