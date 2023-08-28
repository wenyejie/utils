import isString from './isString'
import isNumber from './isNumber'

/**
 * 模拟数组的Array.prototype.splice方法
 * @param string 原始字符串
 * @param start 起始位置
 * @param deleteCount 删除个数
 * @param insertString 插入字符
 */
export const spliceString = (string: string, start: number, deleteCount: number | string = 0, insertString = '') => {
  if (!isString(string)) {
    return ''
  }

  // 如果deleteCount不为number, 而是string, 并且insertString为空字符串, 则默认为, 该输入参数为insertString
  if (!isNumber(deleteCount) && insertString === '') {
    insertString = <string>deleteCount
    deleteCount = 0
  }

  if (start < 0 || string.length < start || <number>deleteCount < 0) {
    return string
  }

  return string.substring(0, start) + insertString + string.substring(start + <number>deleteCount, string.length)
}

export default spliceString
