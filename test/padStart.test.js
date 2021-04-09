import padStart from '../src/padStart.js'

test('padStart', () => {
  expect(padStart(4)).toBe('04')
  expect(padStart(NaN)).toBe('00')
})
