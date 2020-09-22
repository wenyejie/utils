import isDefined from '../src/isDefined'

test('isDefined', () => {
  expect(isDefined(new Date())).toBeTruthy()
  expect(isDefined('')).toBeTruthy()
  expect(isDefined(0)).toBeTruthy()
  expect(isDefined('0')).toBeTruthy()

  expect(isDefined(null)).toBeFalsy()
  expect(isDefined(undefined)).toBeFalsy()
})
