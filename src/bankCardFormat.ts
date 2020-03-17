import isString from './isString'

/**
 * 银行卡格式化
 * @param card 卡号
 */
const bankCardFormat = (card: string) => {
  if (!isString(card)) {
    return ''
  }
  card = card.trim()
  return card.replace(/(\d{4}(?=\d))/g, '$1 ')
}

export default bankCardFormat
