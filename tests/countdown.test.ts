import { expect, test, vi } from 'vitest'
import { countdown } from '../src/countdown'

test('countdown', () => {
  vi.useFakeTimers()
  let cdValue = 60
  const instance = countdown(cdValue, value => {
    expect(value).toBe(--cdValue)
  })
  vi.runAllTimers()
  expect.assertions(61)
  expect(cdValue).toBe(0)
})
