import ban from '../src/ban'
import { expect, test } from 'vitest'

test('ban', () => {
  const obj = { one: 1, two: 2, three: 3 }
  expect(ban(obj, 'one')).toMatchObject({ two: 2, three: 3 })
  expect(obj).toMatchObject({ one: 1, two: 2, three: 3 })
  expect(ban([])).toBeUndefined()
})
