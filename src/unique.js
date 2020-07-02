/**
 * 数组去重
 * @param array
 */
export const unique = array => {
  return Array.from(new Set(array))
}

export default unique
