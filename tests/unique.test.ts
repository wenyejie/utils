import { expect, test } from 'vitest'
import unique from '../src/unique'

test('unique', () => {
  const arr = [1, 2, 2, 3]
  expect(unique(arr)).toStrictEqual([1, 2, 3])
  // @ts-ignore
  expect(unique({})).toStrictEqual({})
})
