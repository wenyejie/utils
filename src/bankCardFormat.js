import isString from './isString.js'
import { rBankCardNO } from './regexp.js'

/**
 * 银行卡格式化
 * @param card 卡号
 */
export const bankCardFormat = card => {
  if (!isString(card) || !rBankCardNO.test(card)) {
    return ''
  }
  card = card.trim()
  return card.replace(/(\d{4}(?=\d))/g, '$1 ')
}

export default bankCardFormat
