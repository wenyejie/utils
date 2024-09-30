import { decimalLength } from './decimalLength'
import { toNumber } from './toNumber'
import { isString } from './isString'

/**
 * 小数转整数
 * @param num
 * @param length
 */
export const toInteger = (num: number, length: number) => {
  return Math.ceil(num * Math.pow(10, length))
}

/**
 * 整数转小数
 * @param num
 * @param length
 */
export const toDecimal = (num: number, length: number) => {
  return num / Math.pow(10, length)
}

const operationInit = (num1: number | string, num2: number | string) => {
  const length = Math.max(decimalLength(+num1), decimalLength(+num2))
  return {
    n1: toInteger(toNumber(num1), length),
    n2: toInteger(toNumber(num2), length),
    length,
  }
}

/**
 * 加
 * @param num1 加数
 * @param num2 被加数
 */
export const add = (num1: number | string, num2: number | string) => {
  const { n1, n2, length } = operationInit(num1, num2)
  return toDecimal(n1 + n2, length)
}

export const plus = add

/**
 * 累加
 * @param nums 加数和被加数
 */
export const multiAdd = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => add(accumulator, currentValue)) as number

export const multiPlus = multiAdd

/**
 * 减
 * @param num1 减数
 * @param num2 被减数
 */
export const subtract = (num1: number | string, num2: number | string) => {
  const { n1, n2, length } = operationInit(num1, num2)
  return toDecimal(n1 - n2, length)
}

export const minus = subtract

/**
 * 累减
 * @param nums 减数和被减数
 */
export const multiSubtract = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue)) as number

export const multiMinus = multiSubtract

/**
 * 乘
 * @param num1 乘数
 * @param num2 被乘数
 */
export const multiply = (num1: number | string, num2: number | string) => {
  // const { n1, n2, length } = operationInit(num1, num2)
  const n1Len = decimalLength(num1)
  const n2Len = decimalLength(num2)
  const n1 = toInteger(+num1, n1Len)
  const n2 = toInteger(+num2, n2Len)
  return toDecimal(n1 * n2, n1Len + n2Len)
}

export const times = multiply

/**
 * 累乘
 * @param nums 乘数和被乘数
 */
export const multiMultiply = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1) as number

export const multiTimes = multiMultiply

/**
 * 除
 * @param num1 除数
 * @param num2 被除数
 */
export const divide = (num1: number | string, num2: number | string) => {
  const { n1, n2 } = operationInit(num1, num2)
  return n1 / n2
}

export const div = divide

/**
 * 累除
 * @param nums 除数和被除数
 */
export const multiDivide = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => divide(accumulator, currentValue)) as number

export const multiDiv = multiDivide

/**
 * 求余
 * @param num1 除数
 * @param num2 被除数
 */
export const remain = (num1: number | string, num2: number | string) => {
  const result = divide(num1, num2)
  const r1 = multiply(result - Math.floor(result), num2)
  const r2 = +num1 % +num2
  return r1.toString().length <= r2.toString().length ? r1 : r2
}

/**
 * 向下取整小数
 * @param num
 * @param length
 */
export const toFloor = (num: number | string, length: number = 0) => {
  num = toNumber(num)
  if (length <= 0) {
    return num
  }
  const base = Math.pow(10, length)
  return divide(Math.floor(times(num, base)), base)
}

/**
 * 向上取整小数
 * @param num
 * @param length
 */
export const toCeil = (num: number | string, length: number = 0) => {
  num = toNumber(num)
  if (length <= 0) {
    return num
  }
  const base = Math.pow(10, length)
  return divide(Math.ceil(times(num, base)), base)
}

const operates = Object.freeze({
  '+': plus,
  '-': minus,
  '*': times,
  '/': divide,
  '%': remain,
})

// 匹配包括花括号的表达式
const rBracketsAndCon = /\([^()]+\)/g
const rBrackets = /[()]/g
const rSymbols = /(?<=\d|\.)([%*/+-])/g
const rSpace = /\s+/g

/**
 * 简单的四则运算不包括括号
 * @param expression 简单表达式
 */
export const arithmetic = (expression: string) => {
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
  let result: number
  do {
    index = arr.findIndex(item => ['*', '/', '%'].includes(item))
    if (index < 0) {
      break
    }
    result = operates[arr[index]](arr[index - 1], arr[index + 1])
    arr.splice(index - 1, 3, `${result}`)
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
 * @param arithmeticStr 表达式
 */
export const exactMath = (arithmeticStr: string) => {
  if (!isString(arithmeticStr)) {
    return 0
  }
  try {
    while (rBracketsAndCon.test(arithmeticStr)) {
      arithmeticStr = arithmeticStr.replace(rBracketsAndCon, express => {
        return arithmetic(express.replace(rBrackets, '')) + ''
      })
    }
    return arithmetic(arithmeticStr)
  } catch (err) {
    return 0
  }
}
