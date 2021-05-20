import decimalLength from './decimalLength.js'
import toNumber from './toNumber.js'
import spliceString from './spliceString.js'
import isString from './isString.js'

const rightPad = (n, len) => {
  if (len === 0) {
    return n
  }
  const dl = decimalLength(+n)
  n = n.toString()
  if (dl === 0) {
    n += ''.padEnd(len, '0')
  } else {
    n = n.replace('.', '')
    n += ''.padEnd(len - dl, '0')
  }
  return Number.parseFloat(n)
}

const leftPad = (n, len) => {
  if (len === 0) {
    return  n
  }
  n = n.toString()
  const il = n.length
  if (len - il + 1 > 0) {
    n = ''.padEnd(len - il, '0') + n
  }
  n = spliceString(n, Math.abs(il - len), '.')
  return Number.parseFloat(n)
}

const operationInit = (num1, num2) => {
  const raise = Math.max(decimalLength(+num1), decimalLength(+num2))
  return {
    n1: rightPad(toNumber(num1), raise),
    n2: rightPad(toNumber(num2), raise),
    raise,
  }
}

// 加
export const add = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 + n2, raise)
}

// 累加
export const multiAdd = (...nums) => nums.reduce((accumulator, currentValue) => add(accumulator, currentValue))

// 减
export const subtract = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 - n2, raise)
}

// 累减
export const multiSubtract = (...nums) => nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue))

// 乘
export const multiply = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 * n2, raise * 2)
}

// 累乘
export const multiMultiply = (...nums) => nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1)

// 除
export const divide = (num1, num2) => {
  const { n1, n2 } = operationInit(num1, num2)
  return n1 / n2
}

// 累除
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

// 匹配包括花括号的表达式
const rBracketsAndCon = /\([^()]+\)/g
const rBrackets = /[()]/g
const rSymbols = /(?<=\d|\.)([%*/+-])/g
const rSpace = /\s+/g

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

  result = +arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-') {
      continue
    }

    result = operates[arr[i - 1] || '+'](result, arr[i])
  }


  return result
}

/**
 * 解析表达式并返回计算结果
 * @param arithmeticStr
 * @returns {number}
 */
export const exactMath = (arithmeticStr) => {
  if (!isString(arithmeticStr)) {
    return 0
  }
  try {
    while (rBracketsAndCon.test(arithmeticStr)) {
      arithmeticStr = arithmeticStr.replace(rBracketsAndCon, (express) => {
        return arithmetic(express.replace(rBrackets, ''))
      })
    }
    return arithmetic(arithmeticStr)
  } catch (err) {
    return 0
  }
}

export default exactMath
