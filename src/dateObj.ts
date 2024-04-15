import toDate from './toDate'
import isDate from './isDate'
import type { LikeDate } from '../types'

// 日期对象返回结果
export interface DateObjResult {
  year: number
  month: number
  day: number
  week: number
  hour: number
  minute: number
  second: number
  millisecond: number
  time: number
}

/**
 * 获取获取日期对象
 * @param date 日期
 */
export const dateObj = (date: LikeDate = new Date()) => {
  let result = {}
  date = toDate(date)
  if (isDate(date)) {
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
  } else {
    console.error('dateObj params error', date);
  }

  return <DateObjResult>result
}

export default dateObj
