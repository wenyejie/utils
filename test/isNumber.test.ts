import isNumber from '../src/isNumber'

test('isNumber', () => {
  expect(isNumber(0)).toBeTruthy()
  expect(isNumber(Number.NaN)).toBeFalsy()
  expect(isNumber('')).toBeFalsy()
})
