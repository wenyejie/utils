import { expect, test } from 'vitest'
import {
  arrDelItemByProp,
  arrDelItemByVal,
  arrDownItem,
  arrUpItem,
  arrFindItemByProp,
  arrFindValByProp,
  isArrInx
} from '../src/array'

test('arrFindItemByProps', () => {
  const arr = [
    {
      name: 'one',
      age: 18
    },
    {
      name: 'two',
      age: 19
    }
  ]
  expect(arrFindItemByProp(arr, { name: 'one' })).toEqual({ name: 'one', age: 18 })
  expect(arrFindItemByProp(arr, 'name', 'one')).toEqual({ name: 'one', age: 18 })
})

test('arrFindValByProps', () => {
  const arr = [
    {
      name: 'one',
      age: 18
    },
    {
      name: 'two',
      age: 19
    }
  ]
  expect(arrFindValByProp(arr, { name: 'one' }, 'age')).toStrictEqual(18)
  expect(arrFindValByProp(arr, { age: 18 }, 'name')).toStrictEqual('one')
})

test('arrDelItemByVal', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  expect(arrDelItemByVal(arr, 1)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  expect(arrDelItemByVal(arr, 2, 3, 4, 5)).toStrictEqual([6, 7, 8, 9])
})

test('arrDelItemByProp', () => {
  const arr = [ { name: 'one', num: 1 }, { name: 'two', num: 2 }, { name: 'three', num: 3 } ]
  expect(arrDelItemByProp(arr, { name: 'one' })).toStrictEqual([ { name: 'two', num: 2 }, { name: 'three', num: 3 } ])
  expect(arrDelItemByProp(arr, 'name', 'two')).toStrictEqual([  { name: 'three', num: 3 } ])
})

test('arrDownItem', () => {
  let arr = [0, 1, 2, 3]
  expect(arrDownItem(arr, 0)).toStrictEqual([1, 0, 2, 3])
  arr = [0, 1, 2, 3]
  expect(arrDownItem(arr, 2)).toStrictEqual([0, 1, 3, 2])
})

test('arrUpItem', () => {
  let arr = [0, 1, 2]
  expect(arrUpItem(arr, 1)).toStrictEqual([1, 0, 2])
  arr = [0, 1, 2]
  expect(arrUpItem(arr, 2)).toStrictEqual([0, 2, 1])
})

test('isArrInx', () => {
  const arr = [0, 1, 2]
  expect(isArrInx(arr, 0)).toBeTruthy()
  expect(isArrInx(arr, 1)).toBeTruthy()
  expect(isArrInx(arr, 2)).toBeTruthy()
  expect(isArrInx(arr, -1)).toBeFalsy()
  expect(isArrInx(arr, 3)).toBeFalsy()
})
