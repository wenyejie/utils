/**
 * 判断字符串是否拥有后缀
 * @param name 名称
 */
export const hasSuffix = (name: string) => /\.\w+$/.test(name)

