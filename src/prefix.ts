import isString from './isString'

/**
 * 获取字符串中的前缀
 * @param string 字符串
 */
export const prefix = (string: string) => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`)
    return ''
  }
  string = string.trim()

  const {
    groups: { prefix },
  } = string.match(/^(?<prefix>\w+)+(?=\.)/)
  return prefix
}

export default prefix
