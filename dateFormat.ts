import toDate from './toDate'
import isDate from './isDate'

const padStart = (number: number): string => {
  return `${number}`.padStart(2, '0')
}

/**
 * 把相关数据转换成
 * @param date 日期
 * @param format 格式
 */
export const dateFormat = (date: any, format = 'YYYY-MM-DD hh:mm:ss') => {
  date = toDate(date)
  if (!isDate(date)) {
    return ''
  }

  return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?/g, (str): string => {
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
      default:
        return ''
    }
  })
}

export default dateFormat
