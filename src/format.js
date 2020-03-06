import { isString } from './common.js'
import { isNumber, isOddNumber } from './number.js'
import { IDCardNumber } from './regexp.js'

/**
 * 银行卡格式化
 * @param number {string} 银行卡号
 * @param defaultValue {string} 默认值, 默认为空字符串
 * @return {string}
 */
export const bankCardFormat = (number, defaultValue = '') => {
  if (!isString(number)) {
    return defaultValue
  }
  number = number.trim()
  return number.replace(/(\d{4}(?=\d))/g, '$1 ')
}

/**
 * 金额格式化
 * @param number {number|string}
 * @param options? {{decimal: 2, symbol: '', default: '', split: ',', length: 3}}
 * @return {string|number}
 */
export const moneyFormat = (number, options) => {
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
  number = Number.parseFloat(number)
  if (!isNumber(number)) {
    return options.default
  }
  const result = number.toFixed(options.decimal)
  const numberSplit = result.split('.')

  return (
    options.symbol +
    numberSplit[0].replace(
      new RegExp('\\B(?=(\\d{' + options.length + '})+(?!\\d))', 'g'),
      options.split
    ) +
    '.' +
    numberSplit[1]
  )
}

/**
 * 金额转中文大写
 * @param n {number|string}
 * @return {string}
 */
export const number2cn = n => {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  n = Math.abs(n)
  let s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

/**
 * 从身份证中查询相关信息
 * @param cardNumber {string} 身份证号码
 * @return {{}|{area: string, date: string, address: string, province: string, month: string, city: string, year: string, sex: string, day: string}}
 */
export const queryInfoByCardNumber = cardNumber => {
  if (!IDCardNumber.test(cardNumber)) {
    console.warn(`参数cardNumber: '${cardNumber}' 身份证号码错误`)
    return {}
  }
  return {
    province: cardNumber.substring(0, 2),
    city: cardNumber.substring(2, 4),
    area: cardNumber.substring(4, 6),
    address: cardNumber.substring(0, 6),
    year: cardNumber.substring(6, 10),
    month: cardNumber.substring(10, 12),
    day: cardNumber.substring(12, 14),
    date: cardNumber.substring(6, 14),
    sex: isOddNumber(+cardNumber.substring(16, 17)) ? '女' : '男'
  }
}
