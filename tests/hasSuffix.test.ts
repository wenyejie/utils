import { expect, test } from 'vitest'
import { hasSuffix } from '../src/hasSuffix'

test('hasSuffix', () => {
  expect(hasSuffix('demo.jpg')).toBeTruthy()
  expect(hasSuffix('demo')).toBeFalsy()
  expect(hasSuffix('demo.webp')).toBeTruthy()
})
