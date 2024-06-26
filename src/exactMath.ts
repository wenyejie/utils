import { decimalLength } from './decimalLength'
import { toNumber } from './toNumber'
import { spliceString } from './spliceString'
import { isString } from './isString'

const rightPad = (n: number, len: number) => {
  if (len === 0) {
    return n
  }
  const dl = decimalLength(+n)
  let sn = n.toString()
  if (dl === 0) {
    sn += ''.padEnd(len, '0')
  } else {
    sn = sn.replace('.', '')
    sn += ''.padEnd(len - dl, '0')
  }
  return Number.parseFloat(sn)
}

const leftPad = (n: number, len: number) => {
  if (len === 0) {
    return n
  }
  let sn = n.toString()
  const il = sn.length
  if (len - il + 1 > 0) {
    sn = ''.padEnd(len > il ? len - il + 1 : len - il, '0') + sn
  }
  sn = spliceString(sn, Math.abs(il - len), '.')
  return Number.parseFloat(sn)
}

const operationInit = (num1: number | string, num2: number | string) => {
  const raise = Math.max(decimalLength(+num1), decimalLength(+num2))
  return {
    n1: rightPad(toNumber(num1), raise),
    n2: rightPad(toNumber(num2), raise),
    raise
  }
}

/**
 * 加
 * @param num1 加数
 * @param num2 被加数
 */
export const add = (num1: number | string, num2: number | string) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 + n2, raise)
}

/**
 * 累加
 * @param nums 加数和被加数
 */
export const multiAdd = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => add(accumulator, currentValue)) as number

/**
 * 减
 * @param num1 减数
 * @param num2 被减数
 */
export const subtract = (num1: number | string, num2: number | string) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 - n2, raise)
}

/**
 * 累减
 * @param nums 减数和被减数
 */
export const multiSubtract = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue)) as number

/**
 * 乘
 * @param num1 乘数
 * @param num2 被乘数
 */
export const multiply = (num1: number | string, num2: number | string) => {
  const { n1, n2, raise } = operationInit(num1, num2)
  return leftPad(n1 * n2, raise * 2)
}

/**
 * 累乘
 * @param nums 乘数和被乘数
 */
export const multiMultiply = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1) as number

/**
 * 除
 * @param num1 除数
 * @param num2 被除数
 */
export const divide = (num1: number | string, num2: number | string) => {
  const { n1, n2 } = operationInit(num1, num2)
  return n1 / n2
}

/**
 * 累除
 * @param nums 除数和被除数
 */
export const multiDivide = (...nums: (number | string)[]) =>
  nums.reduce((accumulator, currentValue) => divide(accumulator, currentValue)) as number

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

const operates = Object.freeze({
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': remain
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
    index = arr.findIndex(item => [ '*', '/', '%' ].includes(item))
    if (index < 0) {
      break
    }
    result = operates[arr[index]](arr[index - 1], arr[index + 1])
    arr.splice(index - 1, 3, `${ result }`)
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

