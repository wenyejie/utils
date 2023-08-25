import isDate from './isDate'
import camelize from './camelize'

interface DatetimeSpanOptions {
  types?: string[]
  hasYear?: boolean
  year?: number
  hasWeek?: boolean
  week?: number
  hasDay?: boolean
  day?: number
  hasHour?: boolean
  hour?: number
  hasMinute?: boolean
  minute?: number
  hasSecond?: boolean
  second?: number
  hasMillisecond?: boolean
  millisecond?: number
  defaultValue?: string
  compare?: Date
}

interface DatetimeSpanResult {
  year?: number
  week?: number
  day?: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
}

const defOpts: DatetimeSpanOptions = {
  types: ['year', 'week', 'day', 'hour', 'minute', 'second'],
  hasYear: false,
  year: 31536e6,
  hasWeek: false,
  week: 6048e5,
  hasDay: true,
  day: 864e5,
  hasHour: true,
  hour: 36e5,
  hasMinute: true,
  minute: 6e4,
  hasSecond: true,
  second: 1e3,
  hasMillisecond: false,
  millisecond: 1,
  defaultValue: '',
}

/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date
 * @param options
 */
export const datetimeSpan = (date: LikeDate, options: DatetimeSpanOptions = {}) => {
  const opts = Object.assign(
    {
      compare: new Date(),
    },
    defOpts,
    options,
  )
  let timestamp = isDate(date)
    ? Math.abs((date as Date).getTime() - opts.compare.getTime())
    : Number.parseInt(date as string)
  const result: DatetimeSpanResult = {}
  opts.types.forEach((name) => {
    if (opts[camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name])
      timestamp %= opts[name]
    }
  })
  return result
}

export default datetimeSpan
