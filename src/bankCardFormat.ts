import isString from './isString'
import removeSpace from './removeSpace'

/**
 * 银行卡格式化
 * @param card 卡号
 */
export const bankCardFormat = (card: string): string => {
  if (!isString(card)) {
    return ''
  }
  return removeSpace(card).replace(/(\d{4}(?=\d))/g, '$1 ')
}

export default bankCardFormat
