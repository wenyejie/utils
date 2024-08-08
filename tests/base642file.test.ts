import { expect, test } from 'vitest'
import { base642file } from '../src/base642file'

test('base642file', () => {
  const base64 = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='

  const file = base642file(base64, 'demo')

  expect(file.name).toEqual('demo.webp')
  expect(file).toHaveProperty('size')
})
