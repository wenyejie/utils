import exactMath, { add, multiAdd, subtract, multiSubtract, multiply, multiMultiply, divide, multiDivide } from '../src/exactMath.js'

test('exactMath-success', () => {
  expect(add(0.1, 0.2)).toBe(0.3)
  expect(multiAdd(0.1, 0.2)).toBe(0.3)
  expect(subtract(0.3, 0.1)).toBe(0.2)
  expect(multiSubtract(0.3, 0.1)).toBe(0.2)
  expect(multiply(0.3, 0.123)).toBe(0.0369)
  expect(multiMultiply(0.3, 0.123)).toBe(0.0369)
  expect(divide(0.3, 0.1)).toBe(3)
  expect(multiDivide(0.3, 0.1)).toBe(3)
  expect(exactMath('0.1 + 0.2')).toBe(0.3)
})

test('exactMath-error', () => {
  expect(add(Number.NaN, 0.1)).toBe(0.1)
  expect(subtract(Number.NaN, 0.1)).toBe(-0.1)
})
