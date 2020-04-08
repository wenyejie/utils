import isBigint from '../isBigint'

test('isBigint', () => {
  const int = BigInt(123)

  expect(isBigint(int)).toBeTruthy()
})
