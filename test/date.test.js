import { isDate } from '../src/common.js'
test('isDate', () => {
  expect(isDate(true)).toBe(false)
})
