import isArray from './isArray'
import isNaturalNumber from './isNaturalNumber'
import isObject from './isObject'
import hasOwn from './hasOwn'

/**
 * 是否正确的数组下标
 * @param arr 数组
 * @param inx 数组下标
 */
export const isTrulyArrInx = (arr: unknown[], inx: number) => {
  return isArray(arr) && isNaturalNumber(inx) && arr.length > inx
}

/**
 * 数组子项上移
 * @param arr 数组
 * @param item 子项
 * @param inx 下标
 */
export const arrUpItem = <T>(arr: T[], item: T, inx: number) => {
  arr.splice(inx, 1)
  arr.splice(inx - 1, 0, item)
  return arr
}

/**
 * 数组子项下移
 * @param arr 数组
 * @param item 子项
 * @param inx 下标
 */
export const arrDownItem = <T>(arr: T[], item: T, inx: number) => {
  arr.splice(inx, 1)
  arr.splice(inx + 1, 0, item)
  return arr
}

/**
 * 数组子项删除
 * @param arr 数组
 * @param inx 下标
 */
export const arrDelItemByInx = <T>(arr: T[], inx: number) => {
  return arr.splice(inx, 1)
}

/**
 * 通过属性移除子项
 * @param array 数组
 * @param key 属性
 * @param value 值
 */
export const arrDelItemByProp = <T>(array: T[], key: PropertyKey | Record<PropertyKey, any>, value: any): T[] => {
  const props = isObject(key) ? (key as Record<PropertyKey, any>) : { [key as PropertyKey]: value }
  if (!isArray(array) || !isObject(props)) {
    return array
  }
  return array.filter((item) => {
    for (let key in props) {
      if (hasOwn(item, key) && item[key] !== props[key]) {
        return true
      }
    }
    return false
  })
}

/**
 * 移除数组中的元素, 会改变原数组
 *
 * @param array 数组
 * @param value 值
 */
export const arrDelItemByVal = <T>(array: T[], value: any) => {
  if (!isArray(array) || array.length <= 0) {
    return array
  }
  const index = array.indexOf(value)
  if (index >= 0 && index < array.length) {
    array.splice(index, 1)
  }
  return array
}

/**
 * 移除数组中的元素, 会改变原数组
 *
 * @param array 数组
 * @param values 值
 */
export const arrDelManyItemByVal = <T>(array: T[], ...values: any[]) => {
  if (!isArray(array) || values.length === 0) {
    return array
  }
  for (let i = 0; i < values.length; i++) {
    arrDelItemByVal(array, values[i])
  }
  return array
}

export const arrFindItemByProps: {
  <V extends unknown, P extends PropertyKey, R extends Record<P, V>>(array: R[], props: R): R
  <V extends unknown, P extends PropertyKey, R extends Record<P, V>>(array: R[], prop: P, value: V): R
} = <V extends unknown, P extends PropertyKey, R extends Record<P, V>>(array: R[], key: P | R, value?: V) => {
  if (!isArray(array)) {
    console.error(new TypeError('argument array is not type array'))
    return
  }
  const props: R = isObject(key) ? <R>key : <R>{ [<P>key]: <V>value }
  const item = array.find((item) => {})
}
