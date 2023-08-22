import isUndefined from './isUndefined'
import isNull from './isNull'

/**
 * 后置填充
 * @param string {string | number | undefined | null}
 * @param maxLength
 * @param fillString
 * @returns {string}
 */
export const padEnd = (string: string | number, maxLength: number = 2, fillString: string = '0'): string => {
  if (isUndefined(string) || isNull(string) || Number.isNaN(string)) {
    string = ''
  }
  return `${string}`.padEnd(maxLength, fillString)
}

export default padEnd
