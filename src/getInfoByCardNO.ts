import { isOddNumber } from './isOddNumber'
import { checkIDNO } from './checkIDNO'

export interface CardInfo {
  province?: string
  city?: string
  area?: string
  address?: string
  year?: string
  month?: string
  day?: string
  date?: string
  sex?: string
}

/**
 * 获取身份证信息
 * @param card 身份证号码
 */
export const getInfoByCardNO = (card: string) => {
  const cardInfo: CardInfo = {}
  if (checkIDNO(card)) {
    Object.assign(cardInfo, {
      province: card.substring(0, 2),
      city: card.substring(2, 4),
      area: card.substring(4, 6),
      address: card.substring(0, 6),
      year: card.substring(6, 10),
      month: card.substring(10, 12),
      day: card.substring(12, 14),
      date: card.substring(6, 14),
      sex: isOddNumber(+card.substring(16, 17)) ? '1' : '2' // male, female
    })
  }
  return cardInfo
}

