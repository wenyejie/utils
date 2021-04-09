/**
 * 获取获取日期对象
 * @param date
 * @returns {{week: number, month: number, hour: number, year: number, millisecond: number, time: number, day: number, minute: number, second: number}}
 */
export const dateObj = (date = new Date()) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    week: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
    time: date.getTime()
  }
}

export default dateObj
