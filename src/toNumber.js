import isNumber from './isNumber.js'

const toNumber = (num, defaultValue = 0) => {
  num = Number.parseFloat(num)

  if (isNumber(num)) {
    return num
  }
  return defaultValue
}

export default toNumber
