import { test, expect } from 'vitest'
import hasOwn from '../src/hasOwn'

test('hasOwn', () => {
  const obj = { key: 'value' }
  expect(hasOwn(obj, 'key')).toBeTruthy()
  expect(hasOwn(obj, 'foo')).toBeFalsy()
  expect(hasOwn(null, 'foo')).toBeFalsy()
  // @ts-ignore
  expect(hasOwn('', 'foo')).toBeFalsy()
  // @ts-ignore
  expect(hasOwn(1, 'foo')).toBeFalsy()
  // @ts-ignore
  expect(hasOwn(obj)).toBeFalsy()
})

