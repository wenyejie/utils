import toDate from './toDate.js'
import isDate from './isDate.js'

/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
export const isSameYear = (date1, date2) => {
  date1 = toDate(date1)
  date2 = toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.getFullYear() === date2.getFullYear()
}

export default isSameYear
