/**
 * 交换对象中的两个属性值
 * @param obj 对象
 * @param i key值
 * @param j key值
 */
export const swap = <T extends  PropertyKey, K>(obj: Record<T, K>, i: string, j: string) => {
  if (!Object.hasOwn(obj, i) || !Object.hasOwn(obj, j)) {
    return obj
  }
  const temp = obj[i]
  obj[i] = obj[j]
  obj[j] = temp
  return obj
}

