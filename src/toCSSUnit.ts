import isNumber from './isNumber'
import isString from './isString'
import { rInteger } from './regexp'

/**
 * 把输入转换为css长度单位
 * @param number 数字
 * @param defaultUnit 默认单位
 */
export const toCSSUnit = (number: number | string, defaultUnit = 'px') => {
  if (isNumber(number) || rInteger.test(number as string)) {
    return number + defaultUnit
  } else if (isString(number)) {
    return number as string
  } else {
    return ''
  }
}

export default toCSSUnit
