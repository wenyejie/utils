import isString from './isString.js'
import isNumber from './isNumber.js'
/**
 * 模拟数组的Array.prototype.splice方法
 * @param string { string } 原始字符串
 * @param start { number } 起始位置
 * @param deleteCount { number | string } 删除个数
 * @param insertString { string } 插入字符
 */
export const spliceString = (string, start, deleteCount = 0, insertString = '') => {
  if (!isString(string)) {
    return ''
  }

  // 如果deleteCount不为number, 而是string, 并且insertString为空字符串, 则默认为, 该输入参数为insertString
  if (!isNumber(deleteCount) && insertString === '') {
    insertString = deleteCount
    deleteCount = 0
  }

  if (start < 0 || string.length < start || deleteCount < 0) {
    return string
  }

  return string.substring(0, start) + insertString + string.substring(start + deleteCount, string.length)
}

export default spliceString
