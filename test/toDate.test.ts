import toDate from '../toDate'

test('toDate---datetime string(2020-03-25 17:50:48)', () => {
  expect(toDate('2020-03-25 17:50:48')).toStrictEqual(new Date('2020-03-25 17:50:48'))
})

test('toDate---datetime string(2020-03-25)', () => {
  expect(toDate('2020-03-25')).toStrictEqual(new Date('2020-03-25'))
})

test('toDate---datetime string(2020)', () => {
  expect(toDate('2020')).toStrictEqual(new Date('2020'))
})

test('toDate---时间戳毫秒级(1585276602997)', () => {
  expect(toDate('1585276602997')).toStrictEqual(new Date(1585276602997))
})

test('toDate---时间戳秒级(1585276602)', () => {
  expect(toDate('1585276602')).toStrictEqual(new Date(1585276602000))
})
