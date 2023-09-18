import { expect, test } from 'vitest'
import isEvenNumber from '../src/isEvenNumber'

test('isEvenNumber', () => {
  expect(isEvenNumber(0)).toBe(true)
  expect(isEvenNumber(1)).toBe(false)
  expect(isEvenNumber(2)).toBe(true)
  expect(isEvenNumber(3)).toBe(false)
  expect(isEvenNumber(4)).toBe(true)
  expect(isEvenNumber(5)).toBe(false)
  expect(isEvenNumber(6)).toBe(true)
  expect(isEvenNumber(7)).toBe(false)
  expect(isEvenNumber(8)).toBe(true)
  expect(isEvenNumber(9)).toBe(false)
})
