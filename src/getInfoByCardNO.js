import isOddNumber from './isOddNumber'
import checkIDNO from './checkIDNO'
import nullProtoObject from './nullProtoObject'

export const getInfoByCardNO = cardNumber => {
  if (!checkIDNO(cardNumber)) {
    console.warn(`参数cardNumber: '${cardNumber}' 身份证号码错误`)
    return nullProtoObject
  }
  return {
    province: cardNumber.substring(0, 2),
    city: cardNumber.substring(2, 4),
    area: cardNumber.substring(4, 6),
    address: cardNumber.substring(0, 6),
    year: cardNumber.substring(6, 10),
    month: cardNumber.substring(10, 12),
    day: cardNumber.substring(12, 14),
    date: cardNumber.substring(6, 14),
    sex: isOddNumber(+cardNumber.substring(16, 17)) ? '女' : '男'
  }
}

export default getInfoByCardNO
