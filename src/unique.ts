/**
 * 数组去重
 * @param array 数组
 */
export const unique = <T>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    console.error(`"${ array }" is not a array`)
    return array
  }
  return Array.from(new Set(array))
}

