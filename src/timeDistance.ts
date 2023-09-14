import toDate from './toDate'
import datetimeSpan from './datetimeSpan'
import dateFormat from './dateFormat'
import isDate from './isDate'

export interface TimeDistanceOptions {
  yearFormat?: string
  dayFormat?: string
  hoursAgo?: string
  minutesAgo?: string
  daysAgo?: string
  days?: number
  just?: string
  compare?: Date
}

/**
 * 返回日期与当前时间的距离
 * @param date 日期
 * @param options 选项
 */
export const timeDistance = (date: LikeDate, options?: TimeDistanceOptions) => {
  date = toDate(date)
  if (!isDate(date)) {
    console.error(`"${date}" is not a valid date`)
    return ''
  }
  options = Object.assign(
    {
      yearFormat: 'YYYY-MM-DD',
      dayFormat: 'MM-DD',
      hoursAgo: '小时前',
      minutesAgo: '分前',
      daysAgo: '天前',
      days: 31,
      just: '刚刚',
      compare: new Date(),
    },
    options,
  )

  const span = datetimeSpan(date, { compare: options.compare })

  if (span.year > 0) {
    return dateFormat(date, options.yearFormat)
  }

  if (span.day > 0 && span.day <= options.days) {
    return dateFormat(date, options.dayFormat)
  }

  if (span.hour > 0) {
    return span.hour + options.hoursAgo
  }

  if (span.minute > 0) {
    return span.minute + options.minutesAgo
  }

  return options.just
}

export default timeDistance
