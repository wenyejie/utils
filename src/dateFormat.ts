import toDate from './toDate'
import isDate from './isDate'
import padStart from './padStart'

/**
 * 把相关数据转换成
 * @param date 日期
 * @param format 格式
 * @param defaultValue string
 */
export const dateFormat = (date: LikeDate, format = 'YYYY-MM-DD hh:mm:ss', defaultValue = '') => {
  date = toDate(date)
  if (!isDate(date)) {
    return defaultValue
  }

  return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g, (str) => {
    switch (str) {
      case 'YYYY':
        return (date as Date).getFullYear() + ''
      case 'YY':
        return ((date as Date).getFullYear() % 100) + ''
      case 'MM':
        return padStart((date as Date).getMonth() + 1)
      case 'M':
        return (date as Date).getMonth() + 1 + ''
      case 'DD':
        return padStart((date as Date).getDate())
      case 'D':
        return (date as Date).getDate() + ''
      case 'hh':
        return padStart((date as Date).getHours())
      case 'h':
        return (date as Date).getHours() + ''
      case 'mm':
        return padStart((date as Date).getMinutes())
      case 'm':
        return (date as Date).getMinutes() + ''
      case 'ss':
        return padStart((date as Date).getSeconds())
      case 's':
        return (date as Date).getSeconds() + ''
      case 'SSS':
        return padStart((date as Date).getMilliseconds(), 3)
      case 'SS':
        return padStart(Math.floor((date as Date).getMilliseconds() / 10))
      case 'S':
        return Math.floor((date as Date).getMilliseconds() / 100) + ''
      default:
        return ''
    }
  })
}

export default dateFormat
