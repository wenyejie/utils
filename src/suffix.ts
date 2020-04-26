import { isString } from './isString'

/**
 * 获取字符串中的后缀
 * @param string 字符串
 */
export const suffix = (string: string): string => {
  if (!isString(string)) {
    return ''
  }
  string = string.trim()

  // 避免兼容性
  // const index = string.search(/(?<=\.)(\w+)+$/)
  const index = string.search(/\.(\w+)+$/)
  if (index === -1) {
    return ''
  }
  // return string.substring(index, string.length)
  return RegExp.$1
}

export default suffix
