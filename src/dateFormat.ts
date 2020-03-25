import toDate from './toDate'
import isDate from './isDate'

const padEnd = (number: number): string => {
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
        return padEnd(date.getMonth() + 1)
      case 'M':
        return date.getMonth() + 1 + ''
      case 'DD':
        return padEnd(date.getDate())
      case 'D':
        return date.getDate() + ''
      case 'hh':
        return padEnd(date.getHours())
      case 'h':
        return date.getHours() + ''
      case 'mm':
        return padEnd(date.getMinutes())
      case 'm':
        return date.getMinutes() + ''
      case 'ss':
        return padEnd(date.getSeconds())
      case 's':
        return date.getSeconds() + ''
      default:
        return ''
    }
  })
}

export default dateFormat