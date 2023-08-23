import { test, expect } from 'vitest'
import swap from '../src/swap'

test('swap', () => {
  expect(swap({ one: 1, two: 2, }, 'one', 'two')).toContain({ one: 2, two: 1 })
  // @ts-ignore
  expect(swap({ one: 1, two: 2, }, 'one', 'three')).toContain({ one: 1, two: 2 })
})
