import isUndefined from './isUndefined'

/**
 * 前置填充
 * @param obj 对象
 * @param maxLength 最大长度
 * @param fillString 填充字符
 */
export const padStart = (obj: string | number, maxLength = 2, fillString = '0') => {
  if (isUndefined(obj) || Number.isNaN(obj)) {
    console.error(`"${obj}" is not a string or number`)
    obj = ''
  }
  return `${obj}`.padStart(maxLength, fillString)
}

export default padStart
