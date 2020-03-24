import isNumber from './isNumber'

export interface MoneyFormatOptions {
  decimal?: number
  symbol?: string
  default?: string
  split?: string
  length?: number
}

/**
 * 金额格式化
 * @param number
 * @param options
 */
export const moneyFormat = (number: string | number, options?: MoneyFormatOptions) => {
  options = Object.assign(
    {
      decimal: 2, // 小数点长度
      symbol: '', // 钱币符号
      default: '', // 默认值
      split: ',', // 分隔符号
      length: 3 // 分割长度
    },
    options
  )
  number = Number.parseFloat(number + '')
  if (!isNumber(number)) {
    return options.default
  }
  const result = number.toFixed(options.decimal)
  const numberSplit = result.split('.')

  return (
    options.symbol +
    numberSplit[0].replace(
      new RegExp('\\B(?=(\\d{' + options.length + '})+(?!\\d))', 'g'),
      <string>options.split
    ) +
    '.' +
    numberSplit[1]
  )
}

export default moneyFormat
