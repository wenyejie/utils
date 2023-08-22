import { isString } from './isString'

/**
 * 获取字符串中的后缀
 * @param string 字符串
 */
export const suffix = (string: string) => {
  if (!isString(string)) {
    return ''
  }
  string = string.trim()
  const { groups: { suffix } } = string.match(/(?<=\.)(?<suffix>\w+)+$/)
  return suffix
}

export default suffix
