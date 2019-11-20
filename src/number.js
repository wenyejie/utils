/**
 * 判断是否为数字(不包括NaN)
 * @param value {*} 任意数据
 * @return {boolean}
 */
export const isNumber = value =>
  typeof value === 'number' && !Number.isNaN(value)

/**
 * 判断是否为纯粹数字(包含NaN)
 * @param value {*} 任意数据
 * @return {boolean}
 */
export const isPlainNumber = value => typeof value === 'number'

/**
 * 判断是否为整数
 * @param value {*}
 * @return {boolean}
 */
export function isInteger(value) {
  if (!isNumber(value)) {
    return false
  }
  return value % 1 === 0
}

/**
 * 判断是否为自然数(包括0)
 * @param value {*}
 * @return {boolean}
 */
export const isNaturalNumber = value => isInteger(value) && value >= 0

/**
 * 判断是否为正整数(不包括0)
 * @param value {*}
 * @return {boolean}
 */
export const isPositiveInteger = value => isInteger(value) && value > 0

// 精准计算
export const preciseCalculation = (countX, countY, operator, length = 3) => {
  const multiple = Math.pow(10, length)
  countX = Number.parseFloat(countX) * multiple
  countY = Number.parseFloat(countY) * multiple
  if (!isNumber(countY) || !isNumber(countX)) {
    console.error('传入参数有误, 请重新确认!')
    return
  }

  let result = 0

  switch (operator) {
    case '+':
      result = countX + countY
      break
    case '-':
      result = countX - countY
      break
    case '*':
      result = countX * countY
      break
    case '/':
      result = countX / countY
      break
    default:
      console.error('运算符传入有误, 请重新确认!')
      break
  }
  result = result / multiple
  return result
}

export default {
  isNumber,
  isPlainNumber,
  isInteger,
  isNaturalNumber,
  isPositiveInteger,
  preciseCalculation
}
