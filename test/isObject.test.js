import isObject from '../src/isObject'

test('isObject', () => {
  expect(isObject({})).toBeTruthy()
  expect(isObject(null)).toBeFalsy()
})
