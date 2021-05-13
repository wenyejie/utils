import datetimeSpan from '../src/datetimeSpan.js'


test('datetimeSpan', () => {
  const timestamp = 34172725737
  const result = {
    day: 30,
    hour: 12,
    minute: 25,
    year: 1
  }

  expect(datetimeSpan(timestamp)).toStrictEqual(result)
  expect(datetimeSpan(new Date(Date.now() + 34172725737))).toStrictEqual(result)
})
