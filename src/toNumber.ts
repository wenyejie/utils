import isNumber from './isNumber'
import isString from './isString'

/**
 * 转换为数字
 * @param num 对象
 * @param defaultValue 默认值
 */
export const toNumber = (num: string | number, defaultValue = 0) => {
  if (isString(num)) {
    num = Number.parseFloat(<string>num)
  }
  if (isNumber(num)) {
    return num
  }
  return defaultValue
}

export default toNumber
