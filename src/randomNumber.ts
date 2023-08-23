/**
 * 随机数
 * @param max 最大值
 * @param min 最小值
 */
export const randomNumber = (max: number, min = 0) => {
  const cMax = Math.max(max, min)
  const cMin = Math.min(max, min)
  return Math.random() * (cMax - cMin) + cMin
}

export default randomNumber
