import { expect, test } from 'vitest'
import { getTsByStr } from '../src/getTsByStr'

test('getTsByStr', () => {
  expect(getTsByStr(1000)).toBe(1000)
  expect(getTsByStr('1')).toBe(1)
  expect(getTsByStr('1s')).toBe(1000)
  expect(getTsByStr('1sec')).toBe(1000)
  expect(getTsByStr('1second')).toBe(1000)
  expect(getTsByStr('1m')).toBe(60000)
  expect(getTsByStr('1min')).toBe(60000)
  expect(getTsByStr('1minute')).toBe(60000)
  expect(getTsByStr('1minute', 'second')).toBe(60)
  expect(getTsByStr('1h')).toBe(36e5)
  expect(getTsByStr('1hour')).toBe(36e5)
  expect(getTsByStr('1d')).toBe(864e5)
  expect(getTsByStr('1day')).toBe(864e5)
  expect(getTsByStr('1w')).toBe(6048e5)
  expect(getTsByStr('1week')).toBe(6048e5)
  expect(getTsByStr('1y')).toBe(31536e6)
  expect(getTsByStr('1year')).toBe(31536e6)

  expect(getTsByStr('2m')).toBe(60000 * 2)
  expect(getTsByStr('20m')).toBe(60000 * 20)

  // @ts-ignore
  expect(getTsByStr({}, 'second')).toBeNull()
  expect(getTsByStr('1demo', 'second')).toBeNull()
})
