import isDate from './isDate'
import isNumber from './isNumber'
import isString from './isString'
import { rInteger, rIOSDateStringFormat } from './regexp'

/**
 * 把其它格式数据转换成日期
 * @param date
 */
export const toDate = (date: Date | string | number): Date | null => {
  if (isDate(date)) {
    return date as Date
  }
  if (!date) {
    return null
  }

  if (isString(date) && rInteger.test(date as string)) {
    date = Number.parseInt(date as string)
  }

  if (isNumber(date)) {
    const dateStr = date + ''
    if (dateStr.length >= 8) {
      if (dateStr.length > 13) {
        date = Number.parseInt((date + '').substring(0, 13))
      } else {
        date = dateStr.padEnd(13, '0')
      }
      date = isString(date) ? Number.parseInt(date as string) : date
      if (Number.isNaN(date)) {
        return
      }
    } else {
      date = dateStr
    }
  }

  // 兼容ios手机, 把ios的date string转换为正常格式
  if (isString(date) && rIOSDateStringFormat.test(date as string)) {
    date = (date as string).replace(/-/g, '/')
  }

  date = new Date(date)
  return isDate(date) ? date : null
}

/**
 * 返回一个跟旧对象不同的日期对象
 * @param date
 */
export const toNewDate = (date: Date | string | number):Date | null => {
  if (isDate(date)) {
    return new Date(date)
  }
  return toDate(date)
}

export default toDate
