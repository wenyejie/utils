import isDate from './isDate'
import isNumber from './isNumber'
import isString from './isString'
import { rInteger, rIOSDateStringFormat } from './regexp'
import isInvalidDate from './isInvalidDate'
import isObject from '@/isObject'
import nullProtoObject from '@/nullProtoObject'

export interface ToDateOptions<D = undefined> {
  // 是否转换成新的对象
  toNew?: boolean
  // 默认值
  defaultValue?: D
}

const normalizedOptions = <D>(options: unknown) => {
  const normalized: ToDateOptions<D> = nullProtoObject()
  if (typeof options === 'boolean') {
    normalized.toNew = options
  } else if (isObject(options)) {
    Object.assign(normalized, options)
  } else {
    normalized.defaultValue = <D>options
  }
  return normalized
}

/**
 * 把其它格式数据转换成日期
 * @param date 对象
 * @param options 选项
 */
export const toDate: {
  (date: LikeDate, defaultValue?: null | undefined): Date | null | undefined
  (date: LikeDate, toNew?: boolean): Date | undefined
  <D>(date: LikeDate, options?: ToDateOptions<D>): Date | D
  <D>(date: LikeDate, defaultValue?: D): Date | D
} = <D, T extends ToDateOptions<D>>(date: LikeDate, options?: T['toNew'] | T['defaultValue'] | T) => {
  const innerOptions = normalizedOptions(options)
  if (!date || isInvalidDate(date)) {
    console.error(`${date} is not valid date`)
    return <D>innerOptions.defaultValue
  }
  if (isDate(date)) {
    return innerOptions.toNew ? new Date(date) : <Date>date
  }

  if (isString(date)) {
    if (rInteger.test(<string>date)) {
      date = Number.parseInt(<string>date)
    } else if (rIOSDateStringFormat.test(<string>date)) {
      // 兼容ios手机, 把ios的date string转换为正常格式
      date = (<string>date).replace(/-/g, '/')
    }
  }

  if (isNumber(date)) {
    const dateStr = date + ''
    if (dateStr.length >= 8) {
      if (dateStr.length > 13) {
        date = dateStr.substring(0, 13)
      } else {
        date = dateStr.padEnd(13, '0')
      }
      date = Number.parseInt(<string>date)
    }
  }

  date = new Date(date)
  if (isInvalidDate(date)) {
    return <D>innerOptions.defaultValue
  }
  return date
}

export default toDate
