import { isArray } from './isArray'
import { isNaturalNumber } from './isNaturalNumber'

// 是否正确的数组下标
export const isTrulyArrInx = (arr: unknown[], inx: number) => {
  return isArray(arr) && isNaturalNumber(inx) && arr.length > inx
}

// 数组子项上移
export const arrUpItem = <T>(arr:T[], item:T, inx: number) => {
  arr.splice(inx, 1)
  arr.splice(inx - 1, 0, item)
  return arr
}

// 数组子项下移
export const arrDownItem = <T>(arr:T[], item:T, inx:number) => {
  arr.splice(inx, 1)
  arr.splice(inx + 1, 0, item)
  return arr
}

// 数组子项删除
export const arrDelItem = <T>(arr:T[], inx:number) => {
  return arr.splice(inx, 1)
}
