import isDate from './isDate'
import isNumber from './isNumber'
import isString from './isString'

/**
 * 把其它格式数据转换成日期
 * @param date
 */
const toDate = (date): Date => {
  if (isDate(date)) {
    return date
  }
  if (!date) {
    return
  }

  if (isString(date) && /^\d+$/.test(date)) {
    date = Number.parseInt(date)
  }

  if (isNumber(date)) {
    if ((date + '').length > 13) {
      date = Number.parseInt((date + '').substring(0, 13))
    }

    if (Number.isNaN(date)) {
      return
    }

    if ((date + '').length < 13) {
      date = `${date}`.padEnd(13, '0')
    }

    date = isString(date) ? Number.parseInt(date) : date
  }

  // 兼容ios手机
  if (typeof date === 'string' && /^\d{4}.\d{1,2}.\d{1,2}\s+ \d{1,2}$/.test(date)) {
    date = date.replace(/\s+/, 'T')
  }

  date = new Date(date)
  return isDate(date) ? date : undefined
}

export default toDate
