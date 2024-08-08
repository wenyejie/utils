/**
 * 数组子项下移
 * @param arr 数组
 * @param inx 下标
 */
export const arrDownItem = <T>(arr: T[], inx: number) => {
  const delArr = arr.splice(inx, 1)
  arr.splice(inx + 1, 0, delArr?.[0])
  return arr
}

