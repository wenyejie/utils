import isString from './isString'
import { rBankCardNO } from './regexp'

/**
 * 银行卡格式化
 * @param card 卡号
 */
export const bankCardFormat = (card: string) => {
  if (!isString(card) || !rBankCardNO.test(card)) {
    return ''
  }
  card = card.trim()
  return card.replace(/(\d{4}(?=\d))/g, '$1 ')
}

export default bankCardFormat
