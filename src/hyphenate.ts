const hyphenateRE = /\B([A-Z])/g

/**
 * 驼峰命名转横杠命名
 * @param str 字符串
 */
export const hyphenate = (str: string) => str.replace(hyphenateRE, '-$1').toLowerCase()

export default hyphenate
