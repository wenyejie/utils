import isBoolean from '../isBoolean'

test('isBoolean', () => {
  expect(isBoolean(true)).toBeTruthy()
  expect(isBoolean(false)).toBeTruthy()
  expect(isBoolean('')).toBeFalsy()
  expect(isBoolean(111)).toBeFalsy()
  expect(isBoolean(undefined)).toBeFalsy()
  expect(isBoolean(null)).toBeFalsy()
})
