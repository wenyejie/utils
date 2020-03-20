import isNumber from './isNumber'

enum calcOperator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '/'
}

/**
 * 精确计算, 避免出现 0.1 + 0.2 !== 0.3的情况出现
 * @param countX
 * @param countY
 * @param operator
 * @param length
 */
export const exactCalc = (
  countX: number | string,
  countY: number | string,
  operator: calcOperator,
  length = 3
): number => {
  const multiple = Math.pow(10, length)
  countX = Number.parseFloat(countX + '') * multiple
  countY = Number.parseFloat(countY + '') * multiple
  if (!isNumber(countY) || !isNumber(countX)) {
    throw new Error('传入参数有误, 请重新确认!')
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
      throw new Error('运算符传入有误, 请重新确认!')
  }
  return result
}

export default exactCalc
