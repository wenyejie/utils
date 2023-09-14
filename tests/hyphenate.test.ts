import { expect, test } from 'vitest'
import hyphenate from '../src/hyphenate'

test('hyphenate', () => {
  expect(hyphenate('hello')).toBe('hello')
  expect(hyphenate('helloWorld')).toBe('hello-world')
  expect(hyphenate('helloWorld-')).toBe('hello-world-')
})
