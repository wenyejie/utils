import padStart from '../src/padStart.js'

test('phoneNumFormat', () => {
  expect(padStart(4)).toBe('04')
  expect(padStart(NaN)).toBe('00')
})
