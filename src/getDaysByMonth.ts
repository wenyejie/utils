import { toDate } from './toDate'
import type { LikeDate } from '../types'

/**
 * 获取当前月份的天数
 * @param date 日期
 */
export const getDaysByMonth = (date: LikeDate) => {
  date = toDate(date)
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

