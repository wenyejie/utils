import { expect, test } from 'vitest'
import { normalizeOptions } from '../src/normalizeOptions'

test('normalizeOptions', () => {
  const DEFAULT_OPTIONS = {
    immediate: true,
    timeout: 300,
    check: () => {
    }
  }

  let options: any = false
  expect(normalizeOptions(options, DEFAULT_OPTIONS)).toStrictEqual({ ...DEFAULT_OPTIONS, immediate: options })
  options = 500
  expect(normalizeOptions(options, DEFAULT_OPTIONS)).toStrictEqual({ ...DEFAULT_OPTIONS, timeout: options })
  options = () => console.log('123456789')
  expect(normalizeOptions(options, DEFAULT_OPTIONS)).toStrictEqual({ ...DEFAULT_OPTIONS, check: options })
})

