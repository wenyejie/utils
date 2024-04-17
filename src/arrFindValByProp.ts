import { isObject } from './isObject'
import { arrFindItemByProp } from './arrFindItemByProp'
import type { PropObj, PropKey } from '../types'

export const arrFindValByProp: {
  /**
   * 根据属性获取属性值
   * @param array 数组
   * @param props 属性对象
   * @param rtnPropKey 返回属性
   */ <T extends PropObj>(array: T[], props: PropObj, rtnPropKey: string): unknown
  /**
   * 根据属性获取属性值
   * @param array 数组
   * @param propKey 属性键
   * @param propValue 属性值
   * @param rtnPropKey 返回属性
   */ <T extends PropObj>(array: T[], propKey: PropKey, propValue: unknown, rtnPropKey: string): unknown
} = <T extends PropObj>(array: T[], propKey: PropObj | PropKey, propValue: unknown, rtnPropKey?: string): unknown => {
  let props: PropObj
  if (isObject(propKey)) {
    props = <PropObj>propKey
    rtnPropKey = <string>propValue
  } else {
    props = { [<PropKey>propKey]: propValue }
  }
  const item = arrFindItemByProp(array, props)
  return item?.[rtnPropKey]
}

