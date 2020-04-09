import isPlainDate from '../isPlainDate'

test('isPlainDate', () => {
  expect(isPlainDate(new Date())).toBeTruthy()
  expect(isPlainDate(new Date('aaaa'))).toBeTruthy()
  expect(isPlainDate('111')).toBeFalsy()
})
