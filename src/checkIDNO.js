import { rIDCardNO } from './regexp.js'

/**
 * 检验身份证号码是否正确,
 * @param id 身份证号码
 */
export const checkIDNO = id => {
  const code = (id + '').toLocaleUpperCase()
  if (!rIDCardNO.test(code)) {
    return false
  }
  // 加权因子
  const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // 校验码
  const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  const arr = code.substring(0, 17).split('')
  const len = arr.length
  let num = 0
  for (let i = 0; i < len; i++) {
    num = num + arr[i] * weightFactor[i]
  }
  return checkCode[num % 11] === code[17]
}

export default checkIDNO
