import { isArray } from './isArray'
import { isNaturalNumber } from './isNaturalNumber'

/**
 * 是否正确的数组下标
 * @param arr {Array} 数组
 * @param inx {number} 下标
 * @returns {boolean}
 */
export const isTrulyArrInx = (arr, inx) => {
  return isArray(arr) && isNaturalNumber(inx) && arr.length > inx
}

/**
 * 数组子项上移
 * @param arr {Array} 数组
 * @param item {any} 子项
 * @param inx {number} 下标
 * @returns {any[]}
 */
export const arrUpItem = (arr, item, inx) => {
  arr.splice(inx, 1)
  arr.splice(inx - 1, 0, item)
  return arr
}

/**
 * 数组子项下移
 * @param arr {Array}
 * @param item {any}
 * @param inx {number}
 * @returns {any[]}
 */
export const arrDownItem = (arr, item, inx) => {
  arr.splice(inx, 1)
  arr.splice(inx + 1, 0, item)
  return arr
}

/**
 * 数组子项删除
 * @param arr {Array}
 * @param inx {number}
 * @returns {any}
 */
export const arrDelItem = (arr, inx) => {
  return arr.splice(inx, 1)
}
