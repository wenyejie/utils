/**
 * 随机整数
 * @param max 最大值
 * @param min 最小值
 */
export const randomInteger = (max: number, min = 0) => {
  const cMax = Math.max(max, min)
  const cMin = Math.min(max, min)
  return Math.floor(Math.random() * (cMax - cMin + 1)) + cMin
}

export default randomInteger
