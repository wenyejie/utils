import isDate from './isDate'
import toDate from './toDate'

/**
 * 获取获取日期对象
 * @param date 日期
 */
export const dateObj = (date: LikeDate = new Date()) => {
  let result: DateObjResult = {}
  date = toDate(date)
  if (!isDate(date)) {
    return result
  }
  result = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
    time: date.getTime(),
  }
  return result
}

export default dateObj
