import { expect, test } from 'vitest'
import isJsonString from '../src/isJsonString'

test('isJsonString', () => {
  expect(isJsonString('{}')).toBe(true)
  expect(isJsonString('[]')).toBe(true)
  expect(isJsonString('null')).toBe(true)
  expect(isJsonString('true')).toBe(true)
  expect(isJsonString('false')).toBe(true)
  expect(isJsonString('1')).toBe(true)
  expect(isJsonString('0')).toBe(true)
  expect(isJsonString('"foo"')).toBe(true)
  expect(isJsonString('"\\"foo\\""')).toBe(true)
  expect(isJsonString('"foo\\nbar"')).toBe(true)
  expect(isJsonString(undefined)).toBe(false)
  expect(isJsonString(1)).toBe(false)
})
