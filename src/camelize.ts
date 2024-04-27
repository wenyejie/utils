const camelizeRE = /-(\w)/g

/**
 * 把横杠命名转化为驼峰命名
 * @param str 字符串
 */
export const camelize = (str: string) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

