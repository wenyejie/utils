import prefix from '../src/prefix'

const NAME = 'aaaa.jpg'

test('prefix', () => {
  expect(prefix(NAME)).toBe('aaaa')
  expect(prefix('')).toBe('')
  expect(prefix()).toBe('')
})
