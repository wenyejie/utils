import { expect, test } from 'vitest'
import isArrayIndex from '../src/isArrayIndex'

test('isArrayIndex', () => {
  const arr = [0, 1, 2]
  expect(isArrayIndex(arr, 0)).toBeTruthy()
  expect(isArrayIndex(arr, 1)).toBeTruthy()
  expect(isArrayIndex(arr, 2)).toBeTruthy()
  expect(isArrayIndex(arr, -1)).toBeFalsy()
  expect(isArrayIndex(arr, 3)).toBeFalsy()
})
