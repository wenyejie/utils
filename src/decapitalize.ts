/**
 * 首字母小写
 * @param str 字符串
 */
export const decapitalize = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export default decapitalize
