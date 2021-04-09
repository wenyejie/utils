import isUndefined from './isUndefined'

/**
 * 前置填充
 * @param string {string | number | undefined | null}
 * @param maxLength {number}
 * @param fillString {string}
 * @returns {string}
 */
export const padStart = (string, maxLength = 2, fillString = '0') => {
  if (isUndefined(string) || Number.isNaN(string)) {
    string = ''
  }
  return `${string}`.padStart(maxLength, fillString)
}

export default padStart
