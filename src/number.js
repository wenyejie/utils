// 判断是否为数字(不包括NaN)
export const isNumber = value => typeof value === 'number' && !Number.isNaN(value)

// 判断是否为纯粹数字(包含NaN)
export const isPlainNumber = value => typeof value === 'number'

// 判断是否为整数
export function isInteger(value) {
  if (!isNumber(value)) {
    return false
  }
  return value % 1 === 0
}

// 判断是否为自然数(包括0)
export const isNaturalNumber = value => isInteger(value) && value >= 0

// 判断是否为正整数(不包括0)
export const isPositiveInteger = value => isInteger(value) && value > 0

// 随机整数
export const randomInteger = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// 随机数
export const randomNumber = (max, min = 0) => Math.random() * (max - min) + min

// 精准计算
export const exactCalc = (countX, countY, operator, length = 3) => {
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
      result = (countX + countY) / multiple
      break
    case '-':
      result = (countX - countY) / multiple
      break
    case '*':
      result = (countX * countY) / multiple / multiple
      break
    case '/':
      result = countX / countY
      break
    default:
      console.error('运算符传入有误, 请重新确认!')
      return
  }
  return result
}

export default {
  isNumber,
  isPlainNumber,
  isInteger,
  isNaturalNumber,
  isPositiveInteger,
  exactCalc,
  randomInteger,
  randomNumber
}
