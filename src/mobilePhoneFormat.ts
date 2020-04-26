import isString from './isString'
import { rMobilePhone } from './regexp'

/**
 * 手机号码格式化显示
 *
 * 如: 13480298111 -> 134****8111
 *
 * @param number
 */
export const mobilePhoneFormat = (number: any) => {
  if (!isString(number) || !rMobilePhone.test(number)) {
    return ''
  }
  // 避免兼容性问题
  // return number.replace(/(?<=\d{3})\w{4}(?=\d{4})/g, '****')
  return number.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
}

export default mobilePhoneFormat
