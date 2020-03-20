import toDate from './toDate'
import isDate from './isDate'

/**
 * 获取当前月份的天数
 * @param date
 */
export const getDaysByMonth = (date: Date = new Date()): number => {
  date = <Date>toDate(date)
  if (!isDate(date)) {
    console.warn('参数错误', date)
    return 0
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export default getDaysByMonth
