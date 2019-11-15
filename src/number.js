/**
 * 判断是否为数字(不包括NaN)
 * @param value {*} 任意数据
 * @return {boolean}
 */
export function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * 判断是否为纯粹数字(包含NaN)
 * @param value {*} 任意数据
 * @return {boolean}
 */
export function isPlainNumber(value) {
  return typeof value === 'number'
}

/**
 * 判断是否为整数
 * @param value {*}
 * @return {boolean}
 */
export function isInteger(value) {
  if (!isNumber(value)) {
    return false
  }
  return value % 1 === 0
}

/**
 * 判断是否为自然数(包括0)
 * @param value {*}
 * @return {boolean}
 */
export function isNaturalNumber(value) {
  return isInteger(value) && value >= 0
}

/**
 * 判断是否为正整数(不包括0)
 * @param value {*}
 * @return {boolean}
 */
export function isPositiveInteger(value) {
  return isInteger(value) && value > 0
}

export default {
  isNumber,
  isPlainNumber,
  isInteger,
  isNaturalNumber,
  isPositiveInteger
}
