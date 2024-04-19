import { expect, test } from 'vitest'
import { toDate } from '../src/toDate'

test('toDate', () => {
  const date = new Date('2013-09-13 12:12:12.121')
  expect(toDate(date)).toEqual(date)
  expect(toDate('2013-09-13 12:12:12.121')).toEqual(date)
  expect(toDate(1379045532121)).toEqual(date)
  expect(toDate('1379045532121')).toEqual(date)

  const date2 = new Date('2013-09-13')
  expect(toDate(1379030400)).toEqual(date2)
  expect(toDate(1379030400000000)).toEqual(date2)

  expect(toDate('ddddd')).toBeUndefined()

  expect(toDate(new Date('ddd'))).toBeUndefined()

  expect(toDate(new Date('ddd'), null)).toBeNull()
  expect(
    toDate(new Date('ddd'), {
      defaultValue: null
    })
  ).toBeNull()
})
