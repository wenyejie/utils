import isDate from './isDate.js'
import camelize from './camelize.js'

const defOpts = {
  hasYear: true,
  year: 31536e6,
  hasMonth: false,
  month: 2592e6,
  hasDay: true,
  day: 864e5,
  hasHour: true,
  hour: 36e5,
  hasMinute: true,
  minute: 6e4,
  hasSecond: false,
  second: 1e3,
  hasMillisecond: false,
  millisecond: 1,
  defaultValue: ''
}

/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date
 * @param options
 * @returns {{}}
 */
export const datetimeSpan = (date, options) => {
  const opts = Object.assign({}, defOpts, options)
  let timestamp = isDate(date) ? date.getTime() - Date.now() : Number.parseInt(date)
  const result = {}
  ;['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'].forEach(name => {
    if (opts[camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name])
      timestamp %= opts[name]
    }
  })
  return result
}

export default datetimeSpan
