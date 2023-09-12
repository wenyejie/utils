import isDate from './isDate'

export type DatetimeSpanTypes = 'year' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'

export interface DatetimeSpanResult {
  year?: number
  week?: number
  day?: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
}

export interface DatetimeSpanOptions extends DatetimeSpanResult {
  types?: DatetimeSpanTypes[]
  compare?: Date
}

const DEFAULT_OPTIONS: DatetimeSpanOptions = {
  types: ['year', 'week', 'day', 'hour', 'minute', 'second'],
  year: 31536e6,
  week: 6048e5,
  day: 864e5,
  hour: 36e5,
  minute: 6e4,
  second: 1e3,
  millisecond: 1,
}

/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date 日期
 * @param options 选项
 */
export const datetimeSpan = (date: LikeDate, options?: DatetimeSpanOptions) => {
  const opts: DatetimeSpanOptions = Object.assign(
    {
      ...DEFAULT_OPTIONS,
    },
    options,
  )
  let timestamp = isDate(date)
    ? Math.abs((<Date>date).getTime() - (opts.compare ?? new Date()).getTime())
    : Number.parseInt(<string>date)
  const result: DatetimeSpanResult = {}
  for (const type of opts.types) {
    result[type] = Math.floor(timestamp / opts[type])
    timestamp %= opts[type]
  }
  return result
}

export default datetimeSpan
