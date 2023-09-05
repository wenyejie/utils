import isObject from './isObject'

/**
 * 遍历
 * @param data 数据
 * @param fn 回调
 */
export const each: {
  (data: any[], fn: AnyFn): void
  (data: PropObj, fn: AnyFn): void
} = (data: any[] | PropObj, fn: AnyFn) => {
  if (!Array.isArray(data) && !isObject(data)) {
    console.error(`${data} is not array or object`)
    return
  }

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (fn(data[i], i, data) === false) {
        break
      }
    }
  } else {
    for (const [key, value] of Object.entries(data)) {
      if (fn(value, key, data) === false) {
        break
      }
    }
  }
}

export default each
