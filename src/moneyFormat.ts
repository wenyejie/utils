import isNumber from './isNumber.js'
import toNumber from './toNumber.js'
import nullProtoObject from './nullProtoObject'

export interface MoneyFormatOptions {
  decimal?: number, // 小数点长度
  symbol?: string, // 钱币符号
  default?: string, // 默认值
  split?: string, // 分隔符号
  length?: number, // 分割长度
  padEnd?: boolean // 是否尾部填充
}

const defaultOptions: MoneyFormatOptions = {
  decimal: 2, // 小数点长度
  symbol: '', // 钱币符号
  default: '', // 默认值
  split: ',', // 分隔符号
  length: 3, // 分割长度
  padEnd: true, // 是否尾部填充
}

/**
 * 金额格式化
 * @param number 金额
 * @param options 选项
 */
export const moneyFormat = (number: number | string, options?: MoneyFormatOptions) => {
  options = Object.assign(
    nullProtoObject(),
    defaultOptions,
    options,
  )
  number = toNumber(number)
  if (!isNumber(number)) {
    return options.default
  }
  const result = number.toFixed(options.decimal)
  const numberSplit = result.split('.')

  if (!options.padEnd && numberSplit[1]) {
    numberSplit[1] = numberSplit[1].replace(/0+$/, '')
  }

  return (
    options.symbol +
    numberSplit[0].replace(
      new RegExp('\\B(?=(\\d{' + options.length + '})+(?!\\d))', 'g'),
      options.split,
    ) +
    (numberSplit[1] ? '.' + numberSplit[1] : '')
  )
}

export default moneyFormat
