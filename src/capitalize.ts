/**
 * 首字母大写
 * @param str 字符串
 */
export const capitalize = (str: string) => {
  return str.replace(/(\w+)/gi, substr => substr.charAt(0).toUpperCase() + substr.slice(1))
}

