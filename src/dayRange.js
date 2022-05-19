/**
 * 返回一天的开始
 * @param date {Date}
 * @returns {Date}
 */
export const dayStart = (date) => {
  date.setHours(0, 0, 0, 0)
  return date
}

/**
 * 返回一天的结束
 * @param date {Date}
 * @returns {Date}
 */
export const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999)
  return date
}
