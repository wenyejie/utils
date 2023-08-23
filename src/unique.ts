import isArray from '@/isArray'

/**
 * 数组去重
 * @param array 数组
 */
export const unique = <T>(array: T[]):T[] => {
  if (!isArray(array)) {
    return array
  }
  return Array.from(new Set(array))
}

export default unique
