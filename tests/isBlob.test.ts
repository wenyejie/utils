import { expect, test } from 'vitest'
import { isBlob } from '../src/isBlob'

test('isBlob', () => {
  const blob = new Blob([ 'test' ], { type: 'text/plain' })
  expect(isBlob(blob)).toBe(false)

  expect(isBlob({})).toBe(false)
  expect(isBlob(null)).toBe(false)
  expect(isBlob(undefined)).toBe(false)
  expect(isBlob('test')).toBe(false)
  expect(isBlob(1)).toBe(false)
  expect(isBlob(true)).toBe(false)
})
