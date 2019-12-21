import { isString, toTypeString, zeroize } from './common.js'
import { isNumber } from './number.js'

export const isDate = obj =>
  toTypeString(obj) === '[object Date]' && obj.toString() !== 'Invalid Date'

export const isPlainDate = obj => toTypeString(obj) === '[object Date]'

/**
 * 判断两个日期是否为同一天
 * @param date1 {Date}
 * @param date2 {Date} 默认为当天时间
 * @return {boolean}
 */
export const isOneDay = (date1, date2 = new Date()) => {
  return date1.toLocaleDateString() === date2.toLocaleDateString()
}

/**
 * 把其它格式数据转换成日期
 * @param date {*}
 * @param defaultValue {*}
 * @return {Date|*}
 */
export const dateConvert = (date, defaultValue = '') => {
  if (isDate(date)) {
    return date
  }
  if (!date) {
    return defaultValue
  }

  if (isString(date) && /^\d+$/.test(date)) {
    date = Number.parseInt(date)
  }

  if (isNumber(date)) {
    if ((date + '').length > 13) {
      date = Number.parseInt((date + '').substring(0, 13))
    }

    if (Number.isNaN(date)) {
      return defaultValue
    }

    if ((date + '').length < 13) {
      date = zeroize(date, 13, false)
    }

    date = isString(date) ? Number.parseInt(date) : date
  }

  date = new Date(date)
  return isDate(date) ? date : defaultValue
}

export const dateFormat = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
  date = dateConvert(date)
  if (!isDate(date)) {
    return ''
  }

  return format.replace(
    // /"[^"]*"|'[^']*'|\b(?:D{1,2}|d{1,3}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g,
    /YY(YY)?|MM?|DD?|hh?|mm?|ss?/g,
    str => {
      switch (str) {
        case 'YYYY':
          return date.getFullYear()
        case 'YY':
          return date.getFullYear() % 100
        case 'MM':
          return zeroize(date.getMonth() + 1)
        case 'M':
          return date.getMonth() + 1
        case 'DD':
          return zeroize(date.getDate())
        case 'D':
          return date.getDate()
        case 'hh':
          return zeroize(date.getHours())
        case 'h':
          return date.getHours()
        case 'mm':
          return zeroize(date.getMinutes())
        case 'm':
          return date.getMinutes()
        case 'ss':
          return zeroize(date.getSeconds())
        case 's':
          return date.getSeconds()
      }
    }
  )
}

export default {
  isDate,
  isPlainDate,
  isOneDay,
  dateConvert,
  dateFormat
}
