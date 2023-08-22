import isUndefined from './isUndefined'
import isNull from './isNull'

/**
 * 前置填充
 * @param string
 * @param maxLength
 * @param fillString
 */
export const padStart = (string: string | number, maxLength = 2, fillString = '0') => {
  if (isUndefined(string) || isNull(string) || Number.isNaN(string)) {
    string = ''
  }
  return `${string}`.padStart(maxLength, fillString)
}

export default padStart
