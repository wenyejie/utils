import { expect, test } from 'vitest'
import { clone } from '../src/clone'

test('clone', () => {
  expect(clone('')).toBe('')
  expect(clone(1)).toBe(1)
  expect(clone({})).toEqual({})
  expect(clone([])).toEqual([])
  expect(clone([1, 2, 3])).toEqual([1, 2, 3])
  expect(clone(new Set([1, 2, 3]))).toEqual(new Set([1, 2, 3]))

  const a = {
    c: undefined,
  }
  const b = a
  const c = {
    a: undefined,
  }
  const obj = {
    a,
    b,
    c,
  }
  c.a = a
  a.c = c

  const newObj = clone(obj)
  debugger
  expect(newObj).toEqual(obj)
})
