import { expect, test } from 'vitest'
import { dateObj } from '../src/dateObj'

test('dateObj', () => {
  const date = new Date('2023-09-14 12:12:12.122')
  const result = {
    day: 14,
    hour: 12,
    millisecond: 122,
    minute: 12,
    month: 9,
    second: 12,
    time: 1694664732122,
    week: 4,
    year: 2023
  }
  expect(dateObj(date)).toEqual(result)

  expect(dateObj('')).toEqual({})
})
