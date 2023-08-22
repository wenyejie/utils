import { expect, test } from 'vitest'
import { toTypeString } from '../src/toTypeString'

test('toTypeString string', () => {
  expect(toTypeString('122')).toBe('[object string]')
})