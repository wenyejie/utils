import toDate from './toDate'
import isDate from './isDate'

/**
 * 获取当前月份的天数
 * @param date 日期
 */
export const getDaysByMonth = (date: LikeDate) => {
  date = toDate(date)
  if (!isDate(date)) {
    console.error('参数错误', date)
    return 0
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export default getDaysByMonth
