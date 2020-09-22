import isString from './isString.js'

export const phoneNumFormat = phone => {
  if (isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
  }
  return ''
}

export default phoneNumFormat
