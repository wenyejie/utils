import { isDate } from './isDate'
import { TS_UNIT } from './utils'
import { padStart } from './padStart'
import type { LikeDate } from '../types'

export type DatetimeSpanTypes = 'year' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'

export interface DatetimeSpanResult {
  year?: number | string
  week?: number | string
  day?: number | string
  hour?: number | string
  minute?: number | string
  second?: number | string
  millisecond?: number | string
}

export interface DatetimeSpanOptions {
  types?: DatetimeSpanTypes[]
  compare?: Date
  padStart?: boolean
}

const DEFAULT_OPTIONS: DatetimeSpanOptions = {
  types: [ 'year', 'week', 'day', 'hour', 'minute', 'second' ]
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
    result[type] = padStart(Math.floor(timestamp / TS_UNIT[type.toUpperCase()]))
    timestamp %= TS_UNIT[type.toUpperCase()]
  }
  return result
}

