import { isNumber } from './isNumber.js'
import { toNumber } from './toNumber.js'
import { nullProtoObject } from './nullProtoObject'

enum MoneyFormatType {
  FLOOR = 'floor',
  CEIL = 'ceil',
  ROUND = 'round'
}

export interface MoneyFormatOptions {
  plusSign: boolean, // 正数加符号
  type: MoneyFormatType | string // 返回数字类型, floor:向下取整, ceil:向上取整, 四舍五入round
  decimal: number // 小数点长度
  symbol: string // 钱币符号
  default: string // 默认值
  split: string // 分隔符号
  length: number // 分割长度
  padEnd: boolean // 是否尾部填充
}

const defaultOptions: MoneyFormatOptions = {
  plusSign: false,
  type: MoneyFormatType.FLOOR, // 向下取整
  decimal: 2, // 小数点长度
  symbol: '', // 钱币符号
  default: '', // 默认值
  split: ',', // 分隔符号
  length: 3, // 分割长度
  padEnd: false // 是否尾部填充
}

/**
 * 金额格式化
 * @param number 金额
 * @param options 选项
 */
export const moneyFormat = (number: number | string, options?: Partial<MoneyFormatOptions>) => {
  const opts:MoneyFormatOptions = Object.assign(nullProtoObject(), defaultOptions, options)
  number = toNumber(number)
  if (!isNumber(number)) {
    return opts.default
  }
  let [ integer, decimal ] = number.toString().split('.')

  if (decimal && opts.decimal > 0) {
    const next = decimal[opts.decimal]
    decimal = decimal.substring(0, opts.decimal)
    if (next) {
      switch (opts.type) {
        case MoneyFormatType.CEIL:
          decimal = decimal.replace(/\d$/, str => {
            return (+str + 1).toString()
          })
          break
        case MoneyFormatType.ROUND:
          decimal = decimal.replace(/\d$/, str => {
            return +next >=5 ? (+str + 1).toString() : str
          })
          break
        default:
          break
      }
    }
  } else {
    decimal = ''
  }

  if (opts.padEnd && opts.decimal > 0) {
    decimal = decimal.padEnd(opts.decimal, '0')
  }

  if (decimal.length > 0) {
    decimal = '.' + decimal
  }

  integer = integer.replace(new RegExp('\\B(?=(\\d{' + opts.length + '})+(?!\\d))', 'g'), opts.split)

  return (
    opts.symbol +
    ( number >= 0 && opts.plusSign ? '+' : '') +
    integer +
    decimal
  )
}

export const numberFormat = moneyFormat

