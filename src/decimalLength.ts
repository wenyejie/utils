import { isNumber } from './isNumber'
import { isString } from './isString'

const INTEGER_BIT = /^\d+\.?/

/**
 * 获取小数点长度
 * @param number
 */
export const decimalLength = (number: number | string) => {
  if (isString(number)) {
    number = +number
  }
  if (!isNumber(number)) {
    console.error(`"${number}" is not a number`)
    return 0
  }
  return `${number}`.replace(INTEGER_BIT, '').length
}

