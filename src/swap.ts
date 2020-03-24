import hasOwn from './hasOwn'

/**
 * 交换对象中的两个属性值
 * @param obj
 * @param i
 * @param j
 */
export const swap = (
  obj: Record<string | number, string | number>,
  i: string | number,
  j: string | number
): {} | [] => {
  if (!hasOwn(obj, i) || !hasOwn(obj, j)) {
    return obj
  }
  const temp = obj[i]
  obj[i] = obj[j]
  obj[j] = temp
  return obj
}

export default swap
