import { expect, test } from 'vitest'
import { isBigint } from '../src/isBigint'

test('isBigint', () => {
  expect(isBigint(BigInt(1))).toBe(true)
  expect(isBigint(1n)).toBe(true)
  expect(isBigint(1)).toBe(false)
  expect(isBigint(1.1)).toBe(false)
  expect(isBigint('1')).toBe(false)
  expect(isBigint(true)).toBe(false)
  expect(isBigint(false)).toBe(false)
  expect(isBigint(null)).toBe(false)
  expect(isBigint(undefined)).toBe(false)
  expect(isBigint(Symbol('1'))).toBe(false)
})
