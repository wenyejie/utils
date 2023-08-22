/**
 * 返回一天的开始
 * @param date
 */
export const dayStart = (date: Date) => {
  date.setHours(0, 0, 0, 0)
  return date
}

/**
 * 返回一天的结束
 * @param date
 */
export const dayEnd = (date: Date) => {
  date.setHours(23, 59, 59, 999)
  return date
}
