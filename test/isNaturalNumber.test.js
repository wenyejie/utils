import isNaturalNumber from '../src/isNaturalNumber'

test('isNaturalNumber', () => {
  expect(isNaturalNumber(0)).toBeTruthy()
  expect(isNaturalNumber(+0)).toBeTruthy()
  expect(isNaturalNumber(-1)).toBeFalsy()
  expect(isNaturalNumber(1.1)).toBeFalsy()
})
