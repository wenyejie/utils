import { isString, toTypeString, zeroize } from './common.js'
import { isNumber } from './number.js'

// 判断对象是否为Date并且有效
export const isDate = obj =>
  toTypeString(obj) === '[object Date]' && obj.toString() !== 'Invalid Date'

// 判断对象是否为Date类型
export const isPlainDate = obj => toTypeString(obj) === '[object Date]'

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

/**
 * 获取月份长度
 * @param date {Date| any}
 * @return {number}
 */
const monthLength = (date = new Date()) => {
  date = dateConvert(date)
  if (isDate(date)) {
    console.warn('参数错误', date)
    return 0
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

/**
 * 判断两个日期是否为同一天
 * @param date1 {Date}
 * @param date2 {Date} 默认为当天时间
 * @return {boolean}
 */
export const isOneDay = (date1, date2 = new Date()) => {
  date1 = dateConvert(date1)
  date2 = dateConvert(date2)
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }
  return date1.toLocaleDateString() === date2.toLocaleDateString()
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
