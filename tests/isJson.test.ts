import { expect, test } from 'vitest'
import { isJson } from '../src/isJson'

test('isJson', () => {
  const json = ['1', '2']
  expect(isJson(json)).toBeTruthy()
  const a = {
    b: undefined,
  }
  const b = {
    a: undefined,
  }
  a.b = b
  b.a = a
  expect(isJson(a)).toBeFalsy()
})
