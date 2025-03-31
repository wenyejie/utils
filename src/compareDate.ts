import type { LikeDate } from '../types'
import { toDate } from './toDate'
import { isDate } from '@/isDate'

type Operator = '=' | '>' | '>=' | '<' | '<='
type COMPARE_KEY = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'

const COMPARE_MAP: Record<COMPARE_KEY, keyof Date> = {
  year: 'getFullYear',
  month: 'getMonth',
  day: 'getDate',
  hour: 'getHours',
  minute: 'getMinutes',
  second: 'getSeconds',
  millisecond: 'getMilliseconds',
}

const HIERARCHY: string[] = Object.keys(COMPARE_MAP)

/**
 * 比较两个日期在指定时间单位上的关系
 *
 * @description
 * 此函数会按照时间单位的层级关系（从年到毫秒）逐级比较两个日期，
 * 支持等于、大于、小于等多种比较操作。
 *
 * @param {LikeDate} date1 - 第一个日期，可以是 Date 对象、时间戳或日期字符串
 * @param {LikeDate} date2 - 第二个日期，格式同 date1
 * @param {COMPARE_KEY} [type='day'] - 要比较的时间单位，默认为 'day'。
 *        可选值: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
 * @param {Operator} [operator='='] - 比较运算符，默认为 '='。
 *        可选值: '=' | '>' | '>=' | '<' | '<='
 *
 * @returns {boolean} 比较结果：
 *        - true: 满足比较条件
 *        - false: 不满足比较条件或日期无效
 *
 * @throws 不会抛出异常，但会在控制台输出错误信息
 *
 * @example
 * // 比较是否为同一天
 * compareDate('2023-10-01', '2023-10-01'); // true
 *
 * @example
 * // 比较第一个日期是否大于第二个日期（按天比较）
 * compareDate('2023-10-02', '2023-10-01', 'day', '>'); // true
 *
 * @example
 * // 比较月份是否相同
 * compareDate('2023-10-15', '2023-10-01', 'month', '='); // true
 *
 * @example
 * // 比较第一个日期是否小于等于第二个日期（按小时比较）
 * compareDate('2023-10-01 12:00', '2023-10-01 18:00', 'hour', '<='); // true
 */
export const compareDate = (
  date1: LikeDate,
  date2: LikeDate,
  type: COMPARE_KEY = 'day',
  operator: Operator = '=',
): boolean => {
  const d1 = toDate(date1)
  const d2 = toDate(date2)

  if (!isDate(d1) || !isDate(d2)) {
    console.error(`"${date1}" or "${date2}" is not a valid date`)
    return false
  }

  // 确定需要比较的时间单位层级（从年到当前类型）
  const typeIndex = HIERARCHY.indexOf(type)
  if (typeIndex === -1) return false
  const compareUnits = HIERARCHY.slice(0, typeIndex + 1)

  // 等于运算符：所有层级必须完全相等
  if (operator === '=') {
    return compareUnits.every(unit => d1[COMPARE_MAP[unit]]() === d2[COMPARE_MAP[unit]]())
  }

  // 其他运算符：逐级比较直到找到差异
  for (const unit of compareUnits) {
    const v1 = d1[COMPARE_MAP[unit]]()
    const v2 = d2[COMPARE_MAP[unit]]()

    if (v1 !== v2) {
      switch (operator) {
        case '>':
          return v1 > v2
        case '>=':
          return v1 >= v2
        case '<':
          return v1 < v2
        case '<=':
          return v1 <= v2
        default:
          return false
      }
    }
  }

  // 所有层级均相等时的特殊处理
  return ['=', '>=', '<='].includes(operator)
}

/**
 * 判断两个日期是否在同一天
 * @param { LikeDate } date1 日期
 * @param { LikeDate } date2 日期
 */
export const isSameDay = (date1: LikeDate, date2: LikeDate) => compareDate(date1, date2)

/**
 * 判断两个日期是否在同一月
 * @param { LikeDate } date1
 * @param { LikeDate } date2 日期
 */
export const isSameMonth = (date1: LikeDate, date2: LikeDate) => compareDate(date1, date2, 'month')

/**
 * 判断两个日期是否在同一年
 * @param { LikeDate } date1 日期
 * @param { LikeDate } date2 日期
 */
export const isSameYear = (date1: LikeDate, date2: LikeDate) => compareDate(date1, date2, 'year')

export const isLessDay = (date1: LikeDate, date2: LikeDate) => compareDate(date1, date2, 'day', '<')
