import hasOwn from './hasOwn'

/**
 * 交换对象中的两个属性值
 * @param obj
 * @param i
 * @param j
 */
export const swap = <T extends PropertyKey, K extends  any>(obj:Record<T, K>, i:T, j:T) => {
  if (!hasOwn(obj, i) || !hasOwn(obj, j)) {
    return obj
  }
  const temp = obj[i]
  obj[i] = obj[j]
  obj[j] = temp
  return obj
}

export default swap
