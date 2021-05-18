import decimalLength from './decimalLength.js'
import toNumber from './toNumber.js'

// 匹配包括花括号的表达式
const rBracketsAndCon = /\([^()]+\)/g
const rBrackets = /[()]/g
const rSymbols = /(?<=\d|\.)([%*/+-])/g
const rSpace = /\s+/g

const maxDecimalLength = (num1, num2) => {
  return Math.max(decimalLength(num1), decimalLength(num2))
}

export const add = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise + num2 * raise) / raise
}

export const multiAdd = (...nums) => nums.reduce((accumulator, currentValue) => add(accumulator, currentValue))

export const subtract = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise - num2 * raise) / raise
}

export const multiSubtract = (...nums) => nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue))

export const multiply = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return ((num1 * raise) * (num2 * raise)) / Math.pow(raise, 2)
}

export const multiMultiply = (...nums) => nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1)

export const divide = (num1, num2) => {
  num1 = toNumber(num1)
  num2 = toNumber(num2)
  const raise = Math.pow(10, maxDecimalLength(num1,num2))
  return (num1 * raise) / (num2 * raise)
}

export const multiDivide = (...nums) => nums.reduce((accumulator, currentValue) => divide(accumulator, currentValue))

// 求余
export const remain = (num1, num2) => {
  const result = divide(num1, num2)
  const r1 = multiply(result - Math.floor(result), num2)
  const r2 = num1 % num2
  return r1.toString().length <= r2.toString().length ? r1 : r2
}


const operates = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': remain
}

// 简单的四则运算不包括括号
export const arithmetic = (expression) => {
  // 用空格拆分表达式
  expression = expression.replace(rSymbols, ' $1 ')
  // 移除首尾空格
  expression = expression.trim()
  // 把表达式拆分成数组
  let arr = expression.split(rSpace)

  if (arr.length <= 0) {
    return 0
  }

  let index = -1
  let result = null
  do {
    index = arr.findIndex(item => ['*', '/', '%'].includes(item))
    if (index < 0) {
      break
    }
    result = operates[arr[index]](arr[index - 1], arr[index + 1])
    arr.splice(index - 1, 3, result)
  } while (true)

  result = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-') {
      continue
    }

    result = operates[arr[i - 1] || '+'](result, arr[i])
  }


  return result
}

const exactMath = (arithmeticStr) => {
  try {
    while (rBracketsAndCon.test(arithmeticStr)) {
      arithmeticStr = arithmeticStr.replace(rBracketsAndCon, (express) => {
        return arithmetic(express.replace(rBrackets, ''))
      })
    }
    return arithmetic(arithmeticStr)
  } catch (err) {
    throw new Error(err)
  }
}

export default exactMath
