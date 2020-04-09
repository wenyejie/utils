import isObject from '../isObject'

test('isObject', () => {
  expect(isObject({})).toBeTruthy()
  expect(isObject(null)).toBeFalsy()
})
