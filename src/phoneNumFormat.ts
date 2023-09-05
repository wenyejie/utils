import isString from './isString'

/**
 * 手机号码中间四位隐藏
 * @param phone 手机号码
 */
export const phoneNumFormat = (phone: string) => {
  if (Number.isInteger(phone)) {
    phone += ''
  }
  if (isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
  }
  return ''
}

export default phoneNumFormat
