import { dayStart } from './dayStart'

/**
 * 返回一个月的开始
 * @param date 日期
 */
export const monthStart = (date: Date) => {
  date.setDate(1)
  dayStart(date)
  return date
}

export default monthStart
