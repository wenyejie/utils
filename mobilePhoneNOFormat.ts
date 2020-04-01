import isString from './isString'

/**
 * 手机号码格式化显示
 *
 * 如: 13480298111 -> 134****8111
 *
 * @param number
 */
export const mobilePhoneNOFormat = (number?: string) => {
  if (!isString(number)) {
    return ''
  }
  return number.replace(/(?<=\d{3})\w{4}(?=\d{4})/g, '****')
}

export default mobilePhoneNOFormat
