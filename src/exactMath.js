import isNumber from './isNumber.js'
import isInteger from './isInteger.js'

const INTEGER_BIT = /^\d+\.?/

// 获取小数点长度
const decimalLength = n => {
  if (isInteger(n)) {
    return 0
  }
  return n.toString().replace(INTEGER_BIT, '').length
}

// 获取两个数的最大小数点长度
const maxDecimalLength = (x, y) => {
  return Math.max(decimalLength(x), decimalLength(y))
}

/**
 * 通过乘法和和除法对数字的小数点进行移动, 避免计算出现的精度丢失
 * @param n
 * @param length
 * @param operator
 * @return {*|number}
 */
const displacement = (n, length, operator) => {
  if (length === 0) {
    return n
  }
  if (isInteger(n)) {
    n += '.'
  }
  if (operator === '*') {
    n += '0'.padEnd(length, '0')
  } else {
    n = '0'.padEnd(length, '0') + n
  }
  const index = n.indexOf('.')

  n = n.replace('.', '')

  if (operator === '*') {
    n = n.slice(0, index + length) + '.' + n.slice(index + length)
  } else {
    n = n.slice(0, index - length) + '.' + n.slice(index - length)
  }
  return Number.parseFloat(n)
}

/**
 *
 * @param countX
 * @param countY
 * @param operator
 * @return {*}
 */
const calculation = (countX, countY, operator) => {
  if (!isNumber(Number.parseFloat(countY)) || !isNumber(Number.parseFloat(countX))) {
    throw console.error('传入参数有误, 请重新确认!', countX, countY)
  }
  const length = maxDecimalLength(countX, countY)
  countX = displacement(countX, length, '*')
  countY = displacement(countY, length, '*')

  let result = 0

  switch (operator) {
    case '+':
      result = displacement(countX + countY, length, '/')
      break
    case '-':
      result = displacement(countX - countY, length, '/')
      break
    case '*':
      result = displacement(countX * countY, length * 2, '/')
      break
    case '/':
      result = countX / countY
      break
    default:
      throw console.error('运算符传入有误, 请重新确认!')
  }
  return result
}

export const add = (x, y) => calculation(x, y, '+')
export const subtract = (x, y) => calculation(x, y, '-')
export const multiply = (x, y) => calculation(x, y, '*')
export const divide = (x, y) => calculation(x, y, '/')

export default { add, subtract, multiply, divide }
