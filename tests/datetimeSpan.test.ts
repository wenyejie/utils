import { expect, test } from 'vitest'
import { datetimeSpan } from '../src/datetimeSpan'

test('datetimeSpan', () => {
  const ts = 111111111111
  const result = { year: 3, week: 27, day: 2, hour: 0, minute: 11, second: 51 }
  expect(datetimeSpan(ts)).toEqual(result)
  expect(
    datetimeSpan(ts, {
      types: [ 'day', 'hour', 'minute', 'second' ]
    })
  ).toEqual({ day: 1286, hour: 0, minute: 11, second: 51 })
})
