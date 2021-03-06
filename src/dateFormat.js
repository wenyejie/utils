import toDate from './toDate.js'
import isDate from './isDate.js'
import padStart from './padStart.js'

/**
 * 把相关数据转换成
 * @param date 日期
 * @param format 格式
 * @param defaultValue string
 */
export const dateFormat = (date, format = 'YYYY-MM-DD hh:mm:ss', defaultValue = '') => {
  date = toDate(date)
  if (!isDate(date)) {
    return defaultValue
  }

  return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g, str => {
    switch (str) {
      case 'YYYY':
        return date.getFullYear() + ''
      case 'YY':
        return (date.getFullYear() % 100) + ''
      case 'MM':
        return padStart(date.getMonth() + 1)
      case 'M':
        return date.getMonth() + 1 + ''
      case 'DD':
        return padStart(date.getDate())
      case 'D':
        return date.getDate() + ''
      case 'hh':
        return padStart(date.getHours())
      case 'h':
        return date.getHours() + ''
      case 'mm':
        return padStart(date.getMinutes())
      case 'm':
        return date.getMinutes() + ''
      case 'ss':
        return padStart(date.getSeconds())
      case 's':
        return date.getSeconds() + ''
      case 'SSS':
        return padStart(date.getMilliseconds(), 3)
      case 'SS':
        return padStart(Math.floor(date.getMilliseconds() / 10))
      case 'S':
        return Math.floor(date.getMilliseconds() / 100)
      default:
        return ''
    }
  })
}

export default dateFormat
