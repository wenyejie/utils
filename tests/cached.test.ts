import { expect, test } from 'vitest'
import cached from '../src/cached'

test('cached', () => {
  const add = cached((a: number, b: number) => {
    return a + b
  })

  expect(add(1, 1)).toBe(2)
  expect(add(1, 1)).toBe(2)
})
