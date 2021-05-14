import decimalLength from './decimalLength.js'
import toNumber from './toNumber.js'

const maxDecimalLength = (num1, num2) => {
  return Math.max(decimalLength(num1), decimalLength(num2))
}

export const add = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise + num2 * raise) / raise
}

export const multiAdd = (...rest) => rest.reduce((accumulator, currentValue) => add(accumulator, currentValue))

export const subtract = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise - num2 * raise) / raise
}

export const multiSubtract = (...rest) => rest.reduce((accumulator, currentValue) => subtract(accumulator, currentValue))

export const multiply = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return ((num1 * raise) * (num2 * raise)) / Math.pow(raise, 2)
}

export const multiMultiply = (...rest) => rest.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1)

export const divide = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise) / (num2 * raise)
}

export const multiDivide = (...rest) => rest.reduce((accumulator, currentValue) => divide(accumulator, currentValue))

export default {
  add,
  multiAdd,
  subtract,
  multiSubtract,
  multiply,
  multiMultiply,
  divide,
  multiDivide
}
