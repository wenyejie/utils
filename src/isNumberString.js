import { isString } from './isString.js'

/**
 * 判断是否为一个数字型字符串
 * @param obj {any}
 * @returns {boolean}
 */
export const isNumberString = (obj) => {
  if (!isString(obj)) {
    return false
  }
  return (+obj).toString() === obj
}

export default isNumberString
