import percentage from '../src/percentage.js'


test('percentage', () => {
  expect(percentage(0.11)).toBe('11%')
  expect(percentage('11%')).toBe('11%')
  expect(percentage('0.11')).toBe('11%')
})
