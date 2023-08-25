/**
 * 返回一天的结束
 * @param date 日期
 */
export const dayEnd = (date: Date) => {
  date.setHours(23, 59, 59, 999)
  return date
}

export default dayEnd
