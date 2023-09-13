import { expect, test } from 'vitest'
import once from '../src/once'

test('cachedOne', () => {
  const add = once(() => {
    console.log('running')
    return 10
  })

  expect(add()).toBe(10)
  expect(add()).toBe(10)
  expect(add()).toBe(10)
})
