import find from './find'
import isObject from './isObject'

/**
 * 通过属性查找对应属性值
 * @param data 查找的数据
 * @param propValue 查找的属性值
 * @param propKey 查找的属性
 * @param returnKey 返回的属性
 */
export const findProps = (data, propValue, propKey = 'value', returnKey = 'label') => {
  const item = find(data, propKey, propValue)
  return isObject(item) ? item[returnKey] : ''
}

export default findProps
