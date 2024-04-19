import { isObject } from './isObject'
import type { PropKey, PropObj } from '../types'

export const arrDelItemByProp: {
  /**
   * 根据属性删除数组子项. 只删除最先匹配的一项
   * @param array 数组
   * @param prop 属性
   */<P extends PropObj>(array: P[], prop: PropObj): P[]
  /**
   * 根据属性删除数组子项. 只删除最先匹配的一项
   * @param array 数组
   * @param propKey 属性
   * @param propValue 属性值
   */<P extends PropObj>(array: P[], propKey: PropKey, propValue: unknown): P[]
} = <P extends PropObj>(array: P[], propKey: PropKey | PropObj, propValue?: unknown): P[] => {
  const propObj = isObject(propKey) ? <PropObj>propKey : { [<PropKey>propKey]: propValue }
  const propEntries = Object.entries(propObj)
  const index = array.findIndex(item => {
    for (const [ key, value ] of propEntries) {
      if (item[key] !== value) {
        return false
      }
    }
    return true
  })
  if (index >= 0) {
    array.splice(index, 1)
  }
  return array
}

