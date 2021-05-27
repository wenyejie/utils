import dateObj from '../src/dateObj.js'

test('dateObj', () => {
  const date = new Date('2020-10-10 10:10:10.1000')
  const result = {
    year: 2020,
    month: 9,
    day: 10,
    week: 6,
    hour: 10,
    minute: 10,
    second: 10,
    millisecond: 100,
    time: 1602295810100
  }

  expect(dateObj(date)).toStrictEqual(result)
})
