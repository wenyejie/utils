import isNumber from './isNumber.js'
import isInteger from './isInteger.js'

const decimalLength = n => {
  return ((n % 1) + '').replace('0.', '').length
}

const maxDecimalLength = (x, y) => {
  return Math.max(decimalLength(x), decimalLength(y))
}

const displacement = (n, length, operator) => {
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
      console.error('运算符传入有误, 请重新确认!')
      return
  }
  return result
}

export const add = (x, y) => calculation(x, y, '+')
export const subtract = (x, y) => calculation(x, y, '-')
export const multiply = (x, y) => calculation(x, y, '*')
export const divide = (x, y) => calculation(x, y, '/')

export default { add, subtract, multiply, divide }
