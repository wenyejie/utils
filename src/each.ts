import { isObject } from './isObject'

/**
 * 遍历
 * @param data 数据
 * @param fn 回调
 */
export const each: {
  <V>(data: V[], fn: (value: V, index: number, data: V[]) => unknown): void
  <K extends string, V, O = Record<K, V>>(data: O, fn: (value: V, key: K, data: O) => unknown): void
} = <V, K extends string, O = Record<K, V>>(
  data: V[] | O,
  fn: (value: V, index: K | number, data: V[] | O) => unknown,
) => {
  if (!Array.isArray(data) && !isObject(data)) {
    console.error(`"${data}" is not array or object`)
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
      if (fn(value, <K>key, data) === false) {
        break
      }
    }
  }
}

