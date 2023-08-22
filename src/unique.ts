/**
 * 数组去重
 * @param array
 */
export const unique = <T>(array: T[]):T[] => {
  return Array.from(new Set(array))
}

export default unique
