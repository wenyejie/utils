import { timeDistance } from '../src/date.js'


test('timeDistance', () => {
  const date = new Date('2022-05-05 05:05:05')

  expect(timeDistance(date, { compare: new Date('2022-05-05 05:05:00') })).toStrictEqual('刚刚')

  expect(timeDistance(date, { compare: new Date('2022-05-05 05:04:00') })).toStrictEqual('1分前')

  expect(timeDistance(date, { compare: new Date('2022-05-05 04:05:05') })).toStrictEqual('1小时前')

  expect(timeDistance(date, { compare: new Date('2022-05-04 05:05:05') })).toStrictEqual('05-05')

  expect(timeDistance(date, { compare: new Date('2021-05-05 05:05:05') })).toStrictEqual('2022-05-05')

})
