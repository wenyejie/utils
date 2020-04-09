import toDate from './toDate'
import isDate from './isDate'

/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
export const isSameYear = (date1: Date | number | string, date2 = new Date()): boolean => {
  date1 = <Date>toDate(date1)
  date2 = <Date>toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.getFullYear() === date2.getFullYear()
}

export default isSameYear
