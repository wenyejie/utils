import getDaysByMonth from '../src/getDaysByMonth'

test('getDaysByMonth', () => {
  const date = new Date('2020-02-02')
  const days = 29
  expect(getDaysByMonth(date)).toBe(days)
  expect(getDaysByMonth('2020-02-02')).toBe(days)
})
