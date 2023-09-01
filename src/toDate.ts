import isDate from './isDate'
import isNumber from './isNumber'
import isString from './isString'
import { rInteger, rIOSDateStringFormat } from './regexp'
import isInvalidDate from './isInvalidDate'

/**
 * 把其它格式数据转换成日期
 * @param date 对象
 * @param isNew 是否为新对象
 */
export const toDate = (date: LikeDate, isNew = false) => {
  if (!date || isInvalidDate(date)) {
    console.log(`${date} is not a valid date`)
    return null
  }
  if (isDate(date)) {
    return isNew ? new Date(date) : <Date>date
  }

  if (isString(date) && rInteger.test(<string>date)) {
    date = Number.parseInt(<string>date)
  }

  if (isNumber(date)) {
    const dateStr = date + ''
    if (dateStr.length >= 8) {
      if (dateStr.length > 13) {
        date = dateStr.substring(0, 13)
      } else {
        date = dateStr.padEnd(13, '0')
      }
      date = Number.parseInt(<string>date)
      if (Number.isNaN(date)) {
        return null
      }
    }
  }

  // 兼容ios手机, 把ios的date string转换为正常格式
  if (isString(date) && rIOSDateStringFormat.test(<string>date)) {
    date = (<string>date).replace(/-/g, '/')
  }

  date = new Date(date)
  return isDate(date) ? date : null
}

export default toDate
