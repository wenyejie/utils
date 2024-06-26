import { toDate } from './toDate'
import { isDate } from './isDate'
import type { LikeDate } from '../types'

/**
 * 判断两个日期是否在同一天
 * @param date1 日期
 * @param date2 日期
 */
export const isSameDay = (date1: LikeDate, date2: LikeDate) => {
  date1 = toDate(date1)
  date2 = toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    console.error(`"${ date1 }" or "${ date2 }" is not a valid date`)
    return false
  }
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

