import { dateConvert, isOneDay, isDate } from '../src/date.js'
test('isDate', () => {
  expect(isDate(true)).toBe(false)
})

test('dateConvert', () => {
  const date = new Date(1575617707799)
  expect(dateConvert(date)).toBe(date)
  expect(dateConvert('')).toBe('')
  expect(dateConvert('1575617707799')).toEqual(date)
  expect(dateConvert('1575617707')).toEqual(new Date(1575617707000))
  expect(dateConvert(1575617707799)).toEqual(date)
  expect(dateConvert(1575617707)).toEqual(new Date(1575617707000))
  expect(dateConvert(15)).toEqual(new Date(1500000000000))
  expect(dateConvert('', date)).toEqual(date)
})

test('isOneDay', () => {
  const date1 = new Date(1575617707799)
  const date2 = new Date(1575617700000)
  expect(isOneDay(date1, date2)).toBeTruthy()
  expect(isOneDay(date1)).toBeTruthy()
  expect(isOneDay(new Date('aaa'))).toBeFalsy()
})
