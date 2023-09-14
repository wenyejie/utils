import isDate from './isDate'
import { TIMESTAMP_UNIT } from './utils'

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

export interface DatetimeSpanOptions {
  types?: DatetimeSpanTypes[]
  compare?: Date
}

const DEFAULT_OPTIONS: DatetimeSpanOptions = {
  types: ['year', 'week', 'day', 'hour', 'minute', 'second'],
}

const normalizedOptions = (options: Date | DatetimeSpanTypes[] | DatetimeSpanOptions): DatetimeSpanOptions => {
  const innerOptions: DatetimeSpanOptions = { ...DEFAULT_OPTIONS }
  if (isDate(options)) {
    innerOptions.compare = <Date>options
  } else if (Array.isArray(options)) {
    innerOptions.types = options
  } else {
    Object.assign(innerOptions, options)
  }
  return innerOptions
}

/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date 日期
 * @param options 选项
 */
export const datetimeSpan: {
  (date: LikeDate): DatetimeSpanResult
  (date: LikeDate, compareDate: Date): DatetimeSpanResult
  (date: LikeDate, types: DatetimeSpanTypes[]): DatetimeSpanResult
  (date: LikeDate, options: DatetimeSpanOptions): DatetimeSpanResult
} = (date: LikeDate, options?: Date | DatetimeSpanTypes[] | DatetimeSpanOptions) => {
  const { compare, types } = normalizedOptions(options)
  let timestamp = isDate(date)
    ? Math.abs((<Date>date).getTime() - (compare ?? new Date()).getTime())
    : Number.parseInt(<string>date)
  const result: DatetimeSpanResult = {}
  for (const type of types) {
    result[type] = Math.floor(timestamp / TIMESTAMP_UNIT[type.toUpperCase()])
    timestamp %= TIMESTAMP_UNIT[type.toUpperCase()]
  }
  return result
}

export default datetimeSpan
