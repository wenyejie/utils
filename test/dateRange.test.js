import { dayStart, dayEnd } from '../src/dayRange.js'

const date = new Date(2021, 12, 12, 12, 12, 12, 12)


test('dayStart', () => {
  const startDate = new Date(2021, 12, 12)

  const result = dayStart(date)

  expect(result).toStrictEqual(startDate)

})

test('dayEnd', () => {
  const endDate = new Date(2021, 12, 12, 23, 59, 59, 999)

  const result = dayEnd(date)

  expect(result).toStrictEqual(endDate)
})
