import { expect, test } from 'vitest'
import swap from '../src/swap'

test('swap', () => {
  expect(swap({ one: 1, two: 2 }, 'one', 'two')).toMatchObject({ one: 2, two: 1 })
  expect(swap({ one: 1, two: 2 }, 'one', 'three')).toMatchObject({ one: 1, two: 2 })
})
