import isNumber from './isNumber'

export const toNumber = (num: string | number, defaultValue = 0) => {
  num = Number.parseFloat(num as string)

  if (isNumber(num)) {
    return num
  }
  return defaultValue
}

export default toNumber
