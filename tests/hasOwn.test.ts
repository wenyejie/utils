import { expect, test } from 'vitest'
import { hasOwn } from '../src/hasOwn'

test('hasOwn', () => {
  const obj = { key: 'value' }
  expect(hasOwn(obj, 'key')).toBeTruthy()
  expect(hasOwn(obj, 'foo')).toBeFalsy()
  expect(hasOwn('', 'foo')).toBeFalsy()
  expect(hasOwn(1, 'foo')).toBeFalsy()
  expect(hasOwn(obj)).toBeFalsy()
})
