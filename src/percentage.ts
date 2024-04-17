import { isString } from './isString'
import { isNumber } from './isNumber'
import { divide } from './exactMath'

export interface PercentageOptions {
  fractionDigits?: number
  padEnd?: boolean
  defaultValue?: string
  onePercent?: number
  symbol?: string
}

const defaultOptions: PercentageOptions = {
  fractionDigits: 2, // 保留小数位
  padEnd: false, // 是否需要后续补零
  defaultValue: '', // 默认值, 即当输入值无法被转化时显示的值
  onePercent: 0.01, // 百分之一的数值, 0.01 * 100 = 1, 1 * 100 = 100
  symbol: '%', // 百分比符号
}

/**
 * 百分比格式化
 * 当返回的数据中自带%符号时, 默认它已经转换成了100%
 * @param value 数据
 * @param options 选项
 */
export const percentage = (value: number | string, options: PercentageOptions = {}) => {
  options = Object.assign({}, defaultOptions, options)
  if (isString(value)) {
    if ((<string>value).includes(options.symbol)) {
      return <string>value
    }
    value = Number.parseFloat(<string>value)
  }

  if (!isNumber(value)) {
    return options.defaultValue
  }

  value = divide(value, options.onePercent)

  value = value.toFixed(options.fractionDigits)
  if (!options.padEnd) {
    value = Number.parseFloat(value)
  }

  return `${value}${options.symbol}`
}

