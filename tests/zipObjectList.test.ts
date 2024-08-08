import { zipObjectList } from '../src/zipObjectList'
import { expect, test } from 'vitest'

test('zipObjectList', () => {
  const props = [ 'zero', 'one', 'two', 'three' ]
  const valueNumbers = [ 0, 1, 2, 3 ]
  const valueLetters = [ 'A', 'B', 'C', 'D' ]
  expect(zipObjectList(props, [ valueNumbers ])).toStrictEqual([ { zero: 0, one: 1, two: 2, three: 3 } ])

  expect(zipObjectList(props, [ valueNumbers, valueLetters ])).toStrictEqual([ {
    zero: 0,
    one: 1,
    two: 2,
    three: 3
  }, { zero: 'A', one: 'B', two: 'C', three: 'D' } ])
})
