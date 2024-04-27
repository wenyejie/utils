import { zip } from '../src/zip'
import { expect, test } from 'vitest'

test('zip', () => {
  const props = [ 'zero', 'one', 'two', 'three' ]
  const valueNumbers = [ 0, 1, 2, 3 ]
  const valueLetters = ['A', 'B', 'C', 'D']
  expect(zip(props, valueNumbers)).toStrictEqual([ [ 'zero', 0 ], [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ])

  expect(zip(props, valueNumbers, valueLetters)).toStrictEqual([ [ 'zero', 0, 'A' ], [ 'one', 1, 'B' ], [ 'two', 2, 'C' ], [ 'three', 3, 'D' ] ])
})
