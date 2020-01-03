import { getSuffix } from '../src/string.js'
test('getSuffix', () => {
  expect(getSuffix('111.jpg')).toBe('jpg')
})
