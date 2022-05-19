import isUndefined from './isUndefined.js'

/**
 * 后置填充
 * @param string {string | number | undefined | null}
 * @param maxLength {number}
 * @param fillString {string}
 * @returns {string}
 */
export const padEnd = (string, maxLength = 2, fillString = '0') => {
  if (isUndefined(string) || Number.isNaN(string)) {
    string = ''
  }
  return `${string}`.padEnd(maxLength, fillString)
}

export default padEnd
