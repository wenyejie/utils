import base642file from '../base642file'

test('base642file', () => {
  const file = base642file(
    'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    'test'
  )
  expect(file).toHaveProperty('size')
  expect(file.size).toBeGreaterThan(0)
})
