import isInteger from '../src/isInteger'

test('isInteger', () => {
  expect(isInteger(1)).toBeTruthy()
  expect(isInteger(0)).toBeTruthy()
  expect(isInteger(0.1)).toBeFalsy()
})
