import isString from './isString.js'
import removeSpace from './removeSpace.js'

/**
 * 银行卡格式化
 * @param card 卡号
 */
export const bankCardFormat = card => {
  if (!isString(card)) {
    return ''
  }
  return removeSpace(card).replace(/(\d{4}(?=\d))/g, '$1 ')
}

export default bankCardFormat
