import { expect, test } from 'vitest'
import { isEmptyValue } from '../src/isEmptyValue'

test('isEmptyValue', () => {
  expect(isEmptyValue(null)).toBe(true)
  expect(isEmptyValue(undefined)).toBe(true)
  expect(isEmptyValue('')).toBe(true)
  expect(isEmptyValue(0)).toBe(false)
  expect(isEmptyValue(Number.NaN)).toBe(true)
  expect(isEmptyValue(false)).toBe(false)
  expect(isEmptyValue([])).toBe(true)
  expect(isEmptyValue({})).toBe(true)
  expect(isEmptyValue(new Date())).toBe(false)
})
