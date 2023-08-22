import isString from './isString'
import isNumber from './isNumber'
import { divide } from './exactMath'

interface PercentageOptions {
  fractionDigits?: number
  padEnd?: boolean
  defaultValue?: string
  onePercent?: number
  symbol?: string
}

const defaultOptions:PercentageOptions = {
  fractionDigits: 2, // 保留小数位
  padEnd: false, // 是否需要后续补零
  defaultValue: '', // 默认值, 即当输入值无法被转化时显示的值
  onePercent: 0.01, // 百分之一的数值, 0.01 * 100 = 1, 1 * 100 = 100
  symbol: '%', // 百分比符号
}

/**
 * 百分比格式化
 * 当返回的数据中自带%符号时, 默认它已经转换成了100%
 * @param value
 * @param options
 */
export const percentage = (value: number | string, options:PercentageOptions = {}) => {
  options = Object.assign({}, defaultOptions, options)
  if (isString(value)) {
    if ((value as string).includes(options.symbol)) {
      return value as string
    }
    value = Number.parseFloat(value as string)
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

export default percentage
