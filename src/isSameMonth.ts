import toDate from './toDate'
import isDate from './isDate'

/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
export const isSameMonth = (date1: LikeDate, date2: LikeDate) => {
  date1 = toDate(date1)
  date2 = toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
}

export default isSameMonth
