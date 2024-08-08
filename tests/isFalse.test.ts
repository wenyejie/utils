import { expect, test } from 'vitest'
import { isFalse } from '../src/isFalse'

test('isFalse', () => {
  expect(isFalse(false)).toBe(true)
  expect(isFalse(0)).toBe(false)
  expect(isFalse(0n)).toBe(false)
  expect(isFalse(NaN)).toBe(false)
  expect(isFalse('')).toBe(false)
  expect(isFalse(null)).toBe(false)
  expect(isFalse(undefined)).toBe(false)
})
