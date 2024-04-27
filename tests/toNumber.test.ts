import { expect, test } from 'vitest'
import { toNumber } from '../src/toNumber'

test('toNumber', () => {
  expect(toNumber(1)).toBe(1)
  expect(toNumber('2')).toBe(2)
  expect(toNumber('N')).toBe(0)
  expect(toNumber('N', -1)).toBe(-1)
})
