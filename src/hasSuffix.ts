import isString from '@/isString'

/**
 * 判断字符串是否拥有后缀
 * @param name 名称
 */
export const hasSuffix = (name: string) => {
  if (!isString(name)) {
    console.error(new TypeError(`"${name}" is not a string`))
    return false
  }

  return /\.\w+$/.test(name)
}

export default hasSuffix
