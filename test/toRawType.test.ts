import { test, expect } from 'vitest'
import { toRawType } from '../src/toRawType'

test('toRawType object', () => {
  expect(toRawType({})).toBe('object')
  expect(toRawType(null)).toBe('null')
  expect(toRawType('')).toBe('string')
})