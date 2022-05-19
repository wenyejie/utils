import toDate from './toDate.js'
import datetimeSpan from './datetimeSpan.js'
import dateFormat from './dateFormat.js'
import isDate from './isDate.js'

/**
 * 返回日期与当前时间的距离
 * @param date { Date }
 * @param options? {{}}
 * @returns {string}
 */
export const timeDistance = (date, options = {}) => {
  date = toDate(date)
  if (!isDate(date)) {
    return ''
  }
  options = Object.assign({
    yearFormat: 'YYYY-MM-DD',
    dayFormat: 'MM-DD',
    hoursAgo: '小时前',
    minutesAgo: '分前',
    daysAgo: '天前',
    days: 31,
    just: '刚刚',
  }, options)

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
