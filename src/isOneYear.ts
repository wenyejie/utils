import toDate from './toDate'
import isDate from './isDate'

/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
const isOneYear = (date1: Date | number | string, date2 = new Date()): boolean => {
  date1 = toDate(date1)
  date2 = toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.getFullYear() === date2.getFullYear()
}

export default isOneYear
