import { expect, test } from 'vitest'
import dayStart from '../src/dayStart'

test('dayStart', () => {
  const date = new Date(2021, 1, 1, 12, 12, 12, 122)

  expect(dayStart(date)).toEqual(new Date(2021, 1, 1, 0, 0, 0, 0))
})
