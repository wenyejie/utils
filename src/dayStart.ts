/**
 * 返回一天的开始
 * @param date 时间
 */
export const dayStart = (date: Date) => {
  date.setHours(0, 0, 0, 0)
  return date
}

