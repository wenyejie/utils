import { expect, test } from 'vitest'
import toMultiKeyOneValue from '../src/toMultiKeyOneValue'

test('toMultiKeyOneValue', () => {
  const obj = toMultiKeyOneValue([
    [['s', 'sec', 'second'], 1e3],
    [['m', 'min', 'minute'], 6e4],
    [['h', 'hour'], 36e5],
    [['d', 'day'], 864e5],
    [['w', 'week'], 6048e5],
    [['y', 'year'], 31536e6],
  ])

  expect(obj.s).toEqual(1e3)
  expect(obj['sec']).toEqual(1e3)

  // @ts-ignore
  expect(toMultiKeyOneValue({})).toBeUndefined()
})
