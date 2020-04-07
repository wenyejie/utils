import exactCalc from '../exactCalc'

test('exactCalc', () => {
  expect(exactCalc(0.1, 0.2, '+')).toBe(0.3)
  expect(exactCalc(0.1, 0.2, '*')).toBe(0.02)
  expect(exactCalc(11.1, 0.2, '/')).toBe(55.5)
  expect(exactCalc(0.3, 0.2, '-')).toBe(0.1)
})
