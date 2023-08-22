import { test, expect } from 'vitest'
import { isUndefined } from '../src/isUndefined'

test('isUndefined', () => {
  expect(isUndefined(undefined)).toBe(true)
  expect(isUndefined(null)).toBe(true)
  expect(isUndefined('')).toBe(false)
})