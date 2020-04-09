import isEmptyValue from '../isEmptyValue'

test('isEmptyValue', () => {
  expect(isEmptyValue('')).toBeTruthy()
  expect(isEmptyValue(0)).toBeFalsy()
  expect(isEmptyValue('')).toBeTruthy()
})
