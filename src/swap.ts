import hasOwn from './hasOwn'
import { PropKey } from '../types'

/**
 * 交换对象中的两个属性值
 * @param obj 对象
 * @param i key值
 * @param j key值
 */
export const swap = <T extends PropKey, K>(obj: Record<T, K>, i: T, j: T) => {
  if (!hasOwn(obj, i) || !hasOwn(obj, j)) {
    return obj
  }
  const temp = obj[i]
  obj[i] = obj[j]
  obj[j] = temp
  return obj
}

export default swap
