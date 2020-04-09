import isOddNumber from '../isOddNumber'

test('isOddNumber', () => {
  expect(isOddNumber(1)).toBeTruthy()
  expect(isOddNumber(-0)).toBeFalsy()
  expect(isOddNumber(2)).toBeFalsy()
})
