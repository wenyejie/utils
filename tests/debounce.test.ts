import { test, expect, vi } from 'vitest'
import debounce from '../src/debounce'

test('debounce', () => {
  let counter = 0
  const send = debounce((a: number, b: number) => {
    counter++
    return a + b
  })

  vi.useFakeTimers()
  send(1, 2)
  send(1, 2)
  vi.runAllTimers()
  expect(counter).toEqual(1)

  counter = 0
  const send2 = debounce(() => {
    counter++
  }, true)
  vi.useFakeTimers()
  send2()
  send2()
  vi.runAllTimers()
  expect(counter).toBe(2)
})
