import toDate from './toDate.js'
import isDate from './isDate.js'

/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
export const isSameMonth = (date1, date2 = new Date()) => {
  date1 = toDate(date1)
  date2 = toDate(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.toLocaleDateString().slice(0, 7) === date2.toLocaleDateString().slice(0, 7)
}

export default isSameMonth
