import { zipObject } from '../src/zipObject'
import { expect, test } from 'vitest'

test('zipObject', () => {
  const props = [ 'zero', 'one', 'two', 'three' ]
  const valueNumbers = [ 0, 1, 2, 3 ]
  const valueLetters = ['A', 'B', 'C', 'D']
  expect(zipObject(props, valueNumbers)).toStrictEqual({zero: 0, one: 1, two: 2, three: 3})

  expect(zipObject(props, valueLetters)).toStrictEqual({zero: 'A', one: 'B', two: 'C', three: 'D'})
})
