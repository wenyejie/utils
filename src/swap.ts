import hasOwn from './hasOwn'

/**
 * 交换对象中的两个属性值
 * @param obj
 * @param i
 * @param j
 */
const swap = (obj:{} | [], i: number | string | symbol, j: number | string | symbol): {} | [] => {
  if (!hasOwn(obj, i) || !hasOwn(obj, j)) {
    return obj
  }
  const temp = obj[i]
  obj[i] = obj[j]
  obj[j] = temp
  return obj
}

export default swap
