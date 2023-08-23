import isString from './isString'
const rSpace = /\s+/g

/**
 * 移除字符串中的空格
 * @param string
 */
export const removeSpace = (string: string) => {
  if (!isString(string)) {
    return ''
  }
  return string.replace(rSpace, '')
}

export default removeSpace
