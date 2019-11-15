import isNumber from '../src/isNumber.js'
test('isNumber', () => {
  expect(isNumber(-100)).toBe(true)
  expect(isNumber()).toBe(true)
})
