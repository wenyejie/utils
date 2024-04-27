import { expect, test } from 'vitest'
import { getDaysByMonth } from '../src/getDaysByMonth'

test('getDaysByMonth', () => {
  const date = new Date('2023-09-13')
  expect(getDaysByMonth(date)).toBe(30)
})
