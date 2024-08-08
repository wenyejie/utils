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

/**
 * 根据值进行数组子项下移
 * @param arr 数组
 * @param value 子项值
 */
export const arrDownItemByValue = <T>(arr: T[], value: T) => {
  const index = arr.indexOf(value)
  if (index <= -1) {
    console.warn(`The value '${value}' is not included in the array '${arr}'`)
    return arr
  }
  return arrDownItem(arr, index)
}

