import { expect, test } from 'vitest'
import isInteger from '../src/isInteger'

test('isInteger', () => {
  expect(isInteger(1)).toBe(true)
  expect(isInteger(1.1)).toBe(false)
  expect(isInteger(0)).toBe(true)
  expect(isInteger(-1)).toBe(true)
  expect(isInteger(-1.1)).toBe(false)
  expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
  expect(isInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(true)
  expect(isInteger(Number.MIN_SAFE_INTEGER)).toBe(true)
  expect(isInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(true)
  expect(isInteger(Number.MIN_VALUE)).toBe(false)
  expect(isInteger(Number.MAX_VALUE)).toBe(true)
  expect(isInteger(Infinity)).toBe(false)
})
