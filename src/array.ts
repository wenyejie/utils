import isObject from './isObject'

/**
 * 是否正确的数组下标
 * @param arr 数组
 * @param inx 数组下标
 */
export const isArrInx = (arr: unknown[], inx: number) => {
  return inx >= 0 && inx < arr.length
}

/**
 * 数组子项上移
 * @param arr 数组
 * @param inx 下标
 */
export const arrUpItem = <T>(arr: T[], inx: number) => {
  const delArr = arr.splice(inx, 1)
  arr.splice(inx - 1, 0, delArr?.[0])
  return arr
}

/**
 * 数组子项下移
 * @param arr 数组
 * @param inx 下标
 */
export const arrDownItem = <T>(arr: T[], inx: number) => {
  const delArr = arr.splice(inx, 1)
  arr.splice(inx + 1, 0, delArr?.[0])
  return arr
}

/**
 * 删除数组中的值
 * @param array 数组
 * @param values 值
 */
export const arrDelItemByVal = <A extends any>(array: A[], ...values: A[]) => {
  for (const value of values) {
    const index = array.indexOf(value)
    array.splice(index, 1)
  }
  return array
}

export const arrDelItemByProp: {
  /**
   * 根据属性删除数组子项
   * @param array 数组
   * @param prop 属性
   */<P extends PropObj>(array: P[], prop: PropObj): P[];
  /**
   * 根据属性删除数组子项
   * @param array 数组
   * @param propKey 属性
   * @param propValue 属性值
   */<P extends PropObj>(array: P[], propKey: PropKey, propValue: any): P[];
} = <P extends PropObj>(array: P[], propKey: PropKey | PropObj, propValue?: any): P[] => {
  const propObj = isObject(propKey) ? <PropObj>propKey : { [<PropKey>propKey]: propValue }
  const propEntries = Object.entries(propObj)
  const index = array.findIndex(item => {
    for (const [key, value] of propEntries) {
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

export const arrFindItemByProp: {
  /**
   * 根据属性获取子项
   * @param array 数组
   * @param props 属性对象
   */<R extends PropObj>(array: R[], props: PropObj): R | undefined,
  /**
   * 根据属性获取子项
   * @param array 数组
   * @param propKey 属性
   * @param propValue 属性值
   */<R extends PropObj>(array: R[], propKey: PropKey, propValue: unknown): R | undefined,
} = <V extends unknown, P extends PropKey, R extends Record<P, V>>(array: R[], prop: P | PropObj, value?: V) => {
  const props: R = isObject(prop) ? <R>prop : <R>{ [<P>prop]: <V>value }
  const propEntries = Object.entries(props)
  return array.find((item) => {
    for (const [prop, value] of propEntries) {
      if (item[prop] !== value) {
        return false
      }
    }
    return true
  })
}


export const arrFindValByProp: {
  /**
   * 根据属性获取属性值
   * @param array 数组
   * @param props 属性对象
   * @param rtnPropKey 返回属性
   */<T extends PropObj>(array: T[], props: PropObj, rtnPropKey: PropKey): any,
  /**
   * 根据属性获取属性值
   * @param array 数组
   * @param propKey 属性键
   * @param propValue 属性值
   * @param rtnPropKey 返回属性
   */<T extends PropObj>(array: T[], propKey: PropKey, propValue: any, rtnPropKey: PropKey): any,
} = <T extends PropObj>(array: T[], propKey: PropObj | PropKey, propValue: any, rtnPropKey?: PropKey): any => {
  let props: PropObj
  if (isObject(propKey)) {
    props = <PropObj>propKey
    rtnPropKey = propValue
  } else {
    props = { [<PropKey>propKey]: propValue }
  }
  const item = arrFindItemByProp(array, props)
  return item?.[rtnPropKey]
}
