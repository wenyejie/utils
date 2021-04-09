import isDate from './isDate.js'
import toDate from './toDate.js'

/**
 * 获取获取日期对象
 * @param date
 * @returns {{}|{week: number, month: number, hour: number, year: number, millisecond: number, time: number, day: number, minute: number, second: number}}
 */
export const dateObj = (date = new Date()) => {
  let result = {}
  date = toDate(date)
  if (!isDate(date)) {
    return result
  }
  result = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    week: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
    time: date.getTime()
  }
  return result
}

export default dateObj
