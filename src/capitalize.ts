/**
 * 首字母大写
 * @param str 字符串
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
