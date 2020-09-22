import toDate from './toDate.js'
import isDate from './isDate.js'

/**
 * 获取当前月份的天数
 * @param date
 */
export const getDaysByMonth = date => {
  date = toDate(date)
  if (!isDate(date)) {
    console.warn('参数错误', date)
    return 0
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export default getDaysByMonth
