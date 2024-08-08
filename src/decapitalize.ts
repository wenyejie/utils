/**
 * 首字母小写
 * @param str 字符串
 */
export const decapitalize = (str: string) => {
  return str.replace(/(\w+)/gi, substr => substr.charAt(0).toLowerCase() + substr.slice(1))
}

