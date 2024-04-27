import { expect, test } from 'vitest'
import { isBoolean } from '../src/isBoolean'

test('isBoolean', () => {
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(0)).toBe(false)
  expect(isBoolean(1)).toBe(false)
  expect(isBoolean('')).toBe(false)
  expect(isBoolean('a')).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(undefined)).toBe(false)
  expect(isBoolean({})).toBe(false)
  expect(isBoolean([])).toBe(false)
  expect(isBoolean(new Date())).toBe(false)
  expect(isBoolean(Symbol())).toBe(false)
  expect(isBoolean(new Set())).toBe(false)
})
