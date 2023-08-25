import isNumber from './isNumber'
import isString from './isString'
import { rInteger } from './regexp'

/**
 * 把输入转换为css长度单位
 * @param value 数字
 * @param unit 默认单位
 */
export const toCSSUnit = (value: number | string, unit = 'px') => {
  if (isNumber(value) || rInteger.test(value as string)) {
    return value + unit
  } else if (isString(value)) {
    return <string>value
  } else {
    return ''
  }
}

export default toCSSUnit
