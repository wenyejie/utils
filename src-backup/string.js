export const isString = obj => typeof obj === 'string'

/**
 * 获取字符串中的后缀
 * @param string 字符串
 * @return {string} 返回后缀
 */
export const getSuffix = string => {
  if (!isString(string)) {
    return ''
  }
  string = string.trim()

  const index = string.search(/(?<=\.)(\w+)+$/)
  if (index === -1) {
    return ''
  }
  return string.substring(index, string.length)
}
