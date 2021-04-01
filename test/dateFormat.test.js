import dateFormat from '../src/dateFormat'

test('dateFormat', () => {
  const dateString = '2002-02-02 02:02:02'
  const dateString1 = '2002-02-02 02:02:02.996'
  const date = new Date(dateString)
  const timestamp = date.getTime()
  expect(dateFormat(date)).toBe(dateString)
  expect(dateFormat(timestamp)).toBe(dateString)
  expect(dateFormat(null)).toBe('')
  expect(dateFormat(dateString)).toBe(dateString)
  expect(dateFormat(dateString1, 'YYYY-MM-DD hh:mm:ss.SSS')).toBe(dateString1)
})
