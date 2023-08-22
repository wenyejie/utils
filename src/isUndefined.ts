/**
 * 判断一个值是否为undefined, 包含undefined和null
 * @param value
 */
export const isUndefined = (value: unknown) => value === undefined  || value === null

export default isUndefined
