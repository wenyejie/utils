import ban from '../src/ban'
import { test, expect } from 'vitest'

test('ban', () => {
  const obj = { one: 1, two: 2, three: 3 }
  expect(ban(obj, 'one')).toContain({ two: 2, three: 3 })
  expect(obj).toContain({ one: 1, two: 2, three: 3 })
  expect(ban([])).toBeUndefined()
})
