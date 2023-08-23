import { test, expect } from 'vitest'
import isInvalidDate from '../src/isInvalidDate'

test('isInvalidDate', () => {
  expect(isInvalidDate(new Date())).toBeFalsy()
  expect(isInvalidDate(new Date(''))).toBeTruthy()
})
