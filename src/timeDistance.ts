import { toDate } from './toDate'
import { datetimeSpan } from './datetimeSpan'
import { dateFormat } from './dateFormat'
import { isDate } from './isDate'
import type { LikeDate } from '../types'

export interface TimeDistanceOptions {
  yearFormat: string
  dayFormat: string
  hoursAgo: string
  minutesAgo: string
  daysAgo: string
  days: number
  just: string
  compare: Date
}

const TIME_DISTANCE_OPTIONS: TimeDistanceOptions = {
  yearFormat: 'YYYY-MM-DD',
  dayFormat: 'MM-DD',
  hoursAgo: '小时前',
  minutesAgo: '分前',
  daysAgo: '天前',
  days: 31,
  just: '刚刚',
  compare: new Date()
}

/**
 * 返回日期与当前时间的距离
 * @param date 日期
 * @param options 选项
 */
export const timeDistance = (date: LikeDate, options?: Partial<TimeDistanceOptions>) => {
  date = toDate(date)
  if (!isDate(date)) {
    console.error(`"${ date }" is not a valid date`)
    return ''
  }
  options = Object.assign({}, TIME_DISTANCE_OPTIONS, options)

  const span = datetimeSpan(date, { compare: options.compare })

  if (<number>span.year > 0) {
    return dateFormat(date, options.yearFormat)
  }

  if (<number>span.day > 0 && <number>span.day <= options.days) {
    return dateFormat(date, options.dayFormat)
  }

  if (<number>span.hour > 0) {
    return span.hour + options.hoursAgo
  }

  if (<number>span.minute > 0) {
    return span.minute + options.minutesAgo
  }

  return options.just
}

