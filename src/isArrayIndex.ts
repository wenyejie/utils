/**
 * 是否正确的数组下标
 * @param arr 数组
 * @param inx 数组下标
 */
export const isArrayIndex = (arr: unknown[], inx: number) => {
  return inx >= 0 && inx < arr.length
}
export default isArrayIndex
