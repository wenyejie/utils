import isUndefined from '../src/isUndefined.js'

test('isUndefined', () => {
  expect(isUndefined(new Date())).toBeFalsy()
  expect(isUndefined('')).toBeFalsy()
  expect(isUndefined(0)).toBeFalsy()
  expect(isUndefined('0')).toBeFalsy()

  expect(isUndefined(null)).toBeTruthy()
  expect(isUndefined(undefined)).toBeTruthy()
})
