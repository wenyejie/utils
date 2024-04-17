import { expect, test } from 'vitest'
import { isPrimitive } from '../src/isPrimitive'

test('isPrimitive', () => {
  expect(isPrimitive(undefined)).toBeTruthy()
  expect(isPrimitive(null)).toBeTruthy()
  expect(isPrimitive('string')).toBeTruthy()
  expect(isPrimitive(true)).toBeTruthy()
  expect(isPrimitive(Symbol('symbol'))).toBeTruthy()
  expect(isPrimitive(1)).toBeTruthy()
  expect(isPrimitive(1n)).toBeTruthy()

  expect(isPrimitive({})).toBeFalsy()
  expect(isPrimitive(() => {})).toBeFalsy()
  expect(isPrimitive([])).toBeFalsy()
  expect(isPrimitive(new Date())).toBeFalsy()
  expect(isPrimitive(new Map())).toBeFalsy()
  expect(isPrimitive(new Set())).toBeFalsy()
  expect(isPrimitive(new WeakSet())).toBeFalsy()
  expect(isPrimitive(new WeakMap())).toBeFalsy()
})
