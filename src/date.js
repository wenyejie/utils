import { isString, toTypeString, zeroize } from './common.js'
import { isNumber } from './number.js'

export const isDate = obj =>
  toTypeString(obj) === '[object Date]' && obj.toString() !== 'Invalid Date'

export const isPlainDate = obj => toTypeString(obj) === '[object Date]'

/**
 * 判断两个日期是否为同一天
 * @param date1 {Date}
 * @param date2 {Date}
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

export default {
  isDate,
  isPlainDate,
  isOneDay,
  dateConvert
}
