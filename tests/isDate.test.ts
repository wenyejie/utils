import { expect, test } from 'vitest'
import isDate from '../src/isDate'

test('isDate', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate(new Date(0))).toBe(true)
  expect(isDate(new Date(NaN))).toBe(false)
  expect(isDate(new Date(2020, 1, 1))).toBe(true)
})
