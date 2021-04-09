import toDate from './toDate.js'
import isDate from './isDate.js'

/**
 * 获取月份范围
 * @param date 可以被new Date转换的数据
 * @param type 范围 range | start | end
 * @returns {{start: null|Date, end: null|Date}|Date|null}
 */
export const monthRange = (date, type = 'range') => {
  date = toDate(date)
  const result = {
    start: null,
    end: null
  }
  if (!isDate(date)) {
    console.warn('参数错误', date)
    return type === 'range' ? result : null
  }

  const start = new Date(date)

  if (type !== 'end') {
    start.setDate(1)
    start.setHours(0, 0, 0, 0)
    return start
  }

  const end = new Date(date)

  if (type !== 'start') {
    end.setMonth(end.getMonth() + 1, 0)
    end.setHours(23, 59, 59, 999)
    return end
  }

  result.start = start
  result.end = end

  return result
}

export default monthRange
