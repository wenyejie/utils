import { expect, test } from 'vitest'
import decimalLength from '../src/decimalLength'

test('decimalLength', () => {
  expect(decimalLength(1.11)).toEqual(2)
  expect(decimalLength(1)).toEqual(0)
  expect(decimalLength('1.110')).toEqual(2)
  expect(decimalLength('qwe')).toEqual(0)
})
