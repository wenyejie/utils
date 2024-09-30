import { dayEnd } from './dayEnd'

/**
 * 返回一个月的开始
 * @param date 日期
 */
export const monthEnd = (date: Date) => {
  date.setMonth(date.getMonth() + 1, 0)
  dayEnd(date)
  return date
}
