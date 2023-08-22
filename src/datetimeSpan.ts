import isDate from './isDate'
import camelize from './camelize'

interface DatetimeSpanOptions {
  hasYear?: boolean,
  year?: number,
  hasMonth?: boolean,
  month?: number,
  hasDay?: boolean,
  day?: number,
  hasHour?: boolean,
  hour?: number,
  hasMinute?: boolean,
  minute?: number,
  hasSecond?: boolean,
  second?: number,
  hasMillisecond?: boolean,
  millisecond?: number,
  defaultValue?: string,
  compare?: Date
}

interface DatetimeSpanResult {
  year?: number,
  month?: number,
  day?: number,
  hour?: number,
  minute?: number,
  second?: number,
  millisecond?: number
}

const defOpts: DatetimeSpanOptions = {
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
  defaultValue: '',
}

const typeArr = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']

/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date
 * @param options
 */
export const datetimeSpan = (date: Date | string | number, options: DatetimeSpanOptions = {}) => {
  const opts = Object.assign({
    compare: new Date(),
  }, defOpts, options)
  let timestamp = isDate(date) ? Math.abs((date as Date).getTime() - opts.compare.getTime()) : Number.parseInt(date as string)
  const result:DatetimeSpanResult = {}
  typeArr.forEach(name => {
    if (opts[camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name])
      timestamp %= opts[name]
    }
  })
  return result
}

export default datetimeSpan