import isDate from '../src/isDate'

test('isDate', () => {
  expect(isDate(new Date())).toBeTruthy()

  expect(isDate(new Date('aaaa'))).toBeFalsy()

  expect(isDate(111)).toBeFalsy()
})
