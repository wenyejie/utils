import { expect, test } from 'vitest'
import { isPlainDate } from '../src/isPlainDate'

test('isPlainDate', () => {
  expect(isPlainDate(new Date())).toBeTruthy()
  expect(isPlainDate(new Date('dddd'))).toBeTruthy()

  expect(isPlainDate(11)).toBeFalsy()
})
