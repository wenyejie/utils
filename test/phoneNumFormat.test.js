import phoneNumFormat from '../src/phoneNumFormat.js'

test('phoneNumFormat', () => {
  expect(phoneNumFormat('13111111111')).toBe('131****1111')
})
