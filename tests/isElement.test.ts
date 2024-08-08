import { expect, test } from 'vitest'
import { isElement } from '../src/isElement'
import { document } from './utils'

test('isElement', () => {
  const div = document.createElement('div')

  expect(isElement(div)).toBe(true)
  expect(isElement(document)).toBe(false)
  expect(isElement(document.body)).toBe(true)
  expect(isElement(document.documentElement)).toBe(true)
  expect(isElement(document.doctype)).toBe(false)
  expect(isElement(document.head)).toBe(true)
  expect(isElement(1)).toBe(false)
})
