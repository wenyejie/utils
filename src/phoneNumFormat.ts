import isString from './isString'
import isInteger from './isInteger'

/**
 * 手机号码中间四位隐藏
 * @param phone
 */
export const phoneNumFormat = (phone: string) => {
  if (isInteger(phone)) {
    phone += ''
  }
  if (isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
  }
  return ''
}

export default phoneNumFormat
