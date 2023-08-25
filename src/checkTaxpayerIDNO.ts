const regArr = [
  /^[\da-z]{10,15}$/i,
  /^\d{6}[\da-z]{10,12}$/i,
  /^[a-z]\d{6}[\da-z]{9,11}$/i,
  /^[a-z]{2}\d{6}[\da-z]{8,10}$/i,
  /^\d{14}[\dx][\da-z]{4,5}$/i,
  /^\d{17}[\dx][\da-z]{1,2}$/i,
  /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,
  /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,
  /^\d{6}[\da-z]{13,14}$/i,
]

/**
 * 校验纳税人识别号, 是否正确
 * @param taxId 纳税识别号
 */
export const checkTaxpayerIDNO = (taxId: string) => {
  const j = regArr.length
  for (let i = 0; i < j; i++) {
    if (regArr[i].test(taxId)) {
      return true
    }
  }
  // 纳税人识别号格式错误
  return false
}

export default checkTaxpayerIDNO
