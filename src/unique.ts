/**
 * 数组去重
 * @param array
 */
export const unique = (array: any[]): any[] => {
  return Array.from(new Set(array))
}

export default unique
