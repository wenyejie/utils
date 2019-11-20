import { isNumber, preciseCalculation } from '../src/number.js'
test('isNumber', () => {
  expect(isNumber(-100)).toBe(true)
  expect(isNumber(Infinity)).toBe(true)
  expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true)
  expect(isNumber()).toBe(false)
  expect(isNumber('')).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber({})).toBe(false)
  expect(isNumber(() => {})).toBe(false)
})

test('preciseCalculation', () => {
  expect(preciseCalculation(0.2, 0.1, '+')).toBe(0.3)
})
