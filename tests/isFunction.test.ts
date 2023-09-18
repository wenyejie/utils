import { expect, test } from 'vitest'
import isFunction from '../src/isFunction'

test('isFunction', () => {
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction(function () {})).toBe(true)
  expect(isFunction(class {})).toBe(true)
  expect(isFunction(new Function())).toBe(true)
  expect(isFunction(null)).toBe(false)
  expect(isFunction(undefined)).toBe(false)
  expect(isFunction(1)).toBe(false)
  expect(isFunction('')).toBe(false)
  expect(isFunction(true)).toBe(false)
  expect(isFunction(false)).toBe(false)
  expect(isFunction([])).toBe(false)
})
