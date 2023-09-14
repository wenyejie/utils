import { expect, test } from 'vitest'
import dayEnd from '../src/dayEnd'

test('dayEnd', () => {
  expect(dayEnd(new Date(2021, 11, 1))).toEqual(new Date(2021, 11, 1, 23, 59, 59, 999))

  expect(dayEnd(new Date(2021, 11))).toEqual(new Date('2021-12-01T15:59:59.999Z'))
})
