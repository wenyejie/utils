import { expect, test } from 'vitest'
import { decapitalize } from '../src/decapitalize'

test('decapitalize', () => {
  expect(decapitalize('Hello')).toBe('hello')
  expect(decapitalize('Hello World')).toBe('hello world')
  expect(decapitalize('Blob')).toBe('blob')
})
