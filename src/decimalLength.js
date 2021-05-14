import isNumber from './isNumber.js'

const INTEGER_BIT = /^\d+\.?/

// 获取小数点长度
export const decimalLength = (value) => {
  if (!isNumber(value)) {
    return 0
  }
  return (`${value}`.replace(INTEGER_BIT, '')).length
}

export default decimalLength
