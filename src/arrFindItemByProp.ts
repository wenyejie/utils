import isObject from './isObject'

export const arrFindItemByProp: {
  /**
   * 根据属性获取子项
   * @param array 数组
   * @param props 属性对象
   */ <R extends PropObj>(array: R[], props: PropObj): R | undefined
  /**
   * 根据属性获取子项
   * @param array 数组
   * @param propKey 属性
   * @param propValue 属性值
   */ <R extends PropObj>(array: R[], propKey: PropKey, propValue: unknown): R | undefined
} = <V extends unknown, P extends PropKey, R extends Record<P, V>>(array: R[], prop: P | PropObj, value?: V) => {
  const props: R = isObject(prop) ? <R>prop : <R>{ [<P>prop]: <V>value }
  const propEntries = Object.entries(props)
  return array.find(item => {
    for (const [prop, value] of propEntries) {
      if (item[prop] !== value) {
        return false
      }
    }
    return true
  })
}

export default arrFindItemByProp
