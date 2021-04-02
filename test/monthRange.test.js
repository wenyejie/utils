import monthRange from '../src/monthRange.js'

test('monthRange', () => {
  const date = new Date('2021-04-01')
  const start = new Date('2021-04-01 0:0:0.0')
  const end = new Date('2021-04-30 23:59:59.999')
  expect(monthRange(date, 'start')).toStrictEqual(start)
  expect(monthRange(date, 'end')).toStrictEqual(end)
  expect(monthRange(date)).toStrictEqual({start, end})
})
