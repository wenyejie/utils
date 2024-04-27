import { expect, test } from 'vitest'
import { each } from '../src/each'

test('each', () => {
  const arr = [ 0, 1, 2 ]
  each(arr, (value, index, innerArr) => {
    expect(value).toEqual(arr[index])
    expect(arr).toBe(innerArr)
  })

  each(arr, value => {
    if (value === 1) {
      return false
    }
  })

  const obj: Record<string, number> = { one: 1, two: 2, three: 3 }

  each(obj, (value, key, innerObj) => {
    expect(value).toEqual(obj[key])
    expect(obj).toBe(innerObj)
  })

  each(obj, value => {
    if (value === 2) {
      return false
    }
  })

  each('', () => {
  })
})
