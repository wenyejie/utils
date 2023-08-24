import isString from './isString'

/**
 * 判断是否为一个数字型字符串
 * @param obj
 */
export const isNumberString = (obj: unknown) => {
  if (!isString(obj)) {
    return false
  }
  return (+obj).toString() === obj
}

export default isNumberString
