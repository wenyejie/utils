import dateFormat from '../src/dateFormat'

test('dateFormat', () => {
  const dateString = '2002-02-02 02:02:02'
  const date = new Date(dateString)
  const timestamp = date.getTime()
  expect(dateFormat(date)).toBe(dateString)
  expect(dateFormat(timestamp)).toBe(dateString)
  expect(dateFormat(null)).toBe('')
  expect(dateFormat(dateString)).toBe(dateString)
})
