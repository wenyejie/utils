/**
 * 是否正确的数组下标
 * @param arr 数组
 * @param index 数组下标
 */
export const isArrayIndex = (arr: unknown[], index: number) => index >= 0 && index < arr.length
