import { expect, test } from 'vitest'
import isComment from '../src/isComment'
import { document } from './utils'

test('isComment', () => {
  const comment = document.createComment('test comment')
  const element = document.createElement('div')

  expect(isComment(comment)).toBe(true)
  expect(isComment(element)).toBe(false)
  expect(isComment(document)).toBe(false)
  expect(isComment(null)).toBe(false)
  expect(isComment(undefined)).toBe(false)
  expect(isComment(1)).toBe(false)
  expect(isComment('')).toBe(false)
  expect(isComment({})).toBe(false)
  expect(isComment(true)).toBe(false)
  expect(isComment(false)).toBe(false)
})
