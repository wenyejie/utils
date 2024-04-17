import { isString } from './isString'

const rSpace = /\s+/g

/**
 * 移除字符串中的空格
 * @param string 字符串
 */
export const removeSpace = (string: string) => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`)
    return ''
  }
  return string.replace(rSpace, '')
}

