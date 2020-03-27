import isDate from './isDate'
import isNumber from './isNumber'
import isString from './isString'

/**
 * 把其它格式数据转换成日期
 * @param date
 */
export const toDate = (date: any): Date | void => {
  if (isDate(date)) {
    return <Date>date
  }
  if (!date) {
    return
  }

  if (isString(date) && /^\d+$/.test(date)) {
    date = Number.parseInt(<string>date)
  }

  if (isNumber(date)) {
    const dateStr = date + ''
    if (dateStr.length >= 8) {
      if (dateStr.length > 13) {
        date = Number.parseInt((date + '').substring(0, 13))
      } else {
        date = dateStr.padEnd(13, '0')
      }
      date = isString(date) ? Number.parseInt(<string>date) : date
      if (Number.isNaN(<number>date)) {
        return
      }
    } else {
      date = dateStr
    }
  }

  // 兼容ios手机
  if (typeof date === 'string' && /^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(date)) {
    date = date.replace(/-/g, '/')
  }

  date = new Date(date)
  return isDate(date) ? <Date>date : undefined
}

export default toDate
