import isNumber from './isNumber.js'
import isString from './isString.js'

const rNumber = /^\d+$/

/**
 * 把输入转换为css长度单位
 * @param number 啥子
 * @param defaultUnit 默认单位
 * @returns {string}
 */
export const toCSSUnit = (number, defaultUnit = 'px') => {
  if (isNumber(number) || rNumber.test(number)) {
    return number + defaultUnit
  } else if (isString(number)) {
    return number
  } else {
    return ''
  }
}
