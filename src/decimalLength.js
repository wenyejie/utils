import isNumber from './isNumber.js'

const INTEGER_BIT = /^\d+\.?/

// 获取小数点长度
export const decimalLength = (number) => {
  if (!isNumber(number)) {
    return 0
  }
  return (`${number}`.replace(INTEGER_BIT, '')).length
}

export default decimalLength
