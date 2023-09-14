import isUndefined from './isUndefined'

/**
 * 后置填充
 * @param obj 对象
 * @param maxLength 最大长度
 * @param fillString 填充字符
 */
export const padEnd = (obj: string | number, maxLength: number = 2, fillString: string = '0'): string => {
  if (isUndefined(obj) || Number.isNaN(obj)) {
    console.error(`"${obj}" is not a string or number`)
    obj = ''
  }
  return `${obj}`.padEnd(maxLength, fillString)
}

export default padEnd
