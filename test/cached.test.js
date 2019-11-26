import { cached } from '../src/common.js'

test('cached', () => {
  const test = cached((a, b) => {
    return a + b
  })
  expect(test(1, 2)).toBe(test(1, 2))
  expect(test(NaN, 2)).toBe(test(NaN, 2))
})
