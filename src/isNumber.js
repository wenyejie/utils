/**
 * 判断数据是否为数字
 * @param value {*} 任意数据
 * @return {boolean}
 */
export function isNumber (value) {
  return typeof value === 'number' && !Number.isNaN(value)
}


export default isNumber
