import { test, expect } from 'vitest'
import isPlainObject from '../src/isPlainObject'

test('isPlainObject', () => {
  expect(isPlainObject('')).toBeFalsy()
  expect(isPlainObject(null)).toBeTruthy()
  expect(isPlainObject({})).toBeTruthy()
})
