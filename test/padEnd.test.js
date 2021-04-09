import padEnd from '../src/padEnd.js'

test('phoneNumFormat', () => {
  expect(padEnd(4)).toBe('40')
  expect(padEnd(NaN)).toBe('00')
})
