import { isString } from './isString'

/**
 * 获取字符串中的前缀
 * @param string 字符串
 */
export const prefix = (string: string): string => {
  if (!isString(string)) {
    return ''
  }
  string = string.trim()

  const index = string.search(/^(\w+)+(?=\.)/)
  if (index === -1) {
    return ''
  }
  return RegExp.$1
}

export default prefix
