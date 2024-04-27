import { partial, PARTIAL_PLACEHOLDER } from '../src/partial'
import { expect, test } from 'vitest'

test('partial', () => {
  const add = (a: number, b: number) => a + b;

  const addOne = partial(add, PARTIAL_PLACEHOLDER, 1);
  expect(addOne(0)).toBe(1)
  expect(addOne(2)).toBe(3)
  expect(addOne(2, 3)).toBe(3)
  expect(addOne(3, 3)).toBe(4)

  const addTwo = partial(add, 2, PARTIAL_PLACEHOLDER, PARTIAL_PLACEHOLDER)
  expect(addTwo(2,3)).toBe(4)
  expect(addTwo(5,3)).toBe(7)

  const addThree = partial(add, PARTIAL_PLACEHOLDER, PARTIAL_PLACEHOLDER)
  expect(addThree(1,2)).toBe(3)
  expect(addThree(3,4)).toBe(7)
})
