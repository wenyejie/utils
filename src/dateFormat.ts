import toDate from './toDate'
import padStart from './padStart'

/**
 * 把相关数据转换成
 * @param date 日期
 * @param format 格式
 * @param defaultValue string
 */
export const dateFormat = (date: LikeDate, format = 'YYYY-MM-DD hh:mm:ss', defaultValue = '') => {
  const newDate = toDate(date)
  if (!newDate) {
    console.error(`${date} is not valid date`)
    return defaultValue
  }

  return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g, str => {
    switch (str) {
      case 'YYYY':
        return newDate.getFullYear() + ''
      case 'YY':
        return (newDate.getFullYear() % 100) + ''
      case 'MM':
        return padStart(newDate.getMonth() + 1)
      case 'M':
        return newDate.getMonth() + 1 + ''
      case 'DD':
        return padStart(newDate.getDate())
      case 'D':
        return newDate.getDate() + ''
      case 'hh':
        return padStart(newDate.getHours())
      case 'h':
        return newDate.getHours() + ''
      case 'mm':
        return padStart(newDate.getMinutes())
      case 'm':
        return newDate.getMinutes() + ''
      case 'ss':
        return padStart(newDate.getSeconds())
      case 's':
        return newDate.getSeconds() + ''
      case 'SSS':
        return padStart(newDate.getMilliseconds(), 3)
      case 'SS':
        return padStart(Math.floor(newDate.getMilliseconds() / 10))
      case 'S':
        return Math.floor(newDate.getMilliseconds() / 100) + ''
    }
  })
}

export default dateFormat
