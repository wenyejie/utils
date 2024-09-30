import { expect, test } from 'vitest'
import { toInteger, toDecimal, times, divide, plus, minus, toFloor, toCeil, exactMath } from '../src/exactMath'

test('toInteger', () => {
  expect(toInteger(1, 0)).toEqual(1)
  expect(toInteger(1.1, 1)).toEqual(11)
  expect(toInteger(1.1234, 4)).toEqual(11234)
  expect(toInteger(1.00002, 5)).toEqual(100002)
  expect(toInteger(1.00000001, 8)).toEqual(100000001)
})

test('toDecimal', () => {
  expect(toDecimal(1, 0)).toEqual(1)
  expect(toDecimal(11, 1)).toEqual(1.1)
  expect(toDecimal(11234, 4)).toEqual(1.1234)
  expect(toDecimal(100002, 5)).toEqual(1.00002)
  expect(toDecimal(100000001, 8)).toEqual(1.00000001)
})

test('times', () => {
  expect(times(1, 1)).toEqual(1)
  expect(times(1.1, 1)).toEqual(1.1)
  expect(times(1.2, 1.2)).toEqual(1.44)
  expect(times(1.02, 1.0001)).toEqual(1.020102)
  expect(times(0.1, 0.2)).toEqual(0.02)
})

test('divide', () => {
  expect(divide(1, 1)).toEqual(1)
  expect(divide(1.1, 1)).toEqual(1.1)
  expect(divide(1.2, 1.2)).toEqual(1)
  expect(divide(1.02, 1.0001)).toEqual(1.01989801019898)
  expect(divide(1.0001, 1.02)).toEqual(0.9804901960784314)
  expect(divide(0.1, 0.2)).toEqual(0.5)
  expect(divide(.2, .1)).toEqual(2)
})
test('plus', () => {
  expect(plus(1, 1)).toEqual(2)
  expect(plus(1.1, 1)).toEqual(2.1)
  expect(plus(1.2, 1.2)).toEqual(2.4)
  expect(plus(1.02, 1.0001)).toEqual(2.0201)
  expect(plus(1.0001, 1.02)).toEqual(2.0201)
  expect(plus(0.1, 0.2)).toEqual(0.3)
  expect(plus(.2, .1)).toEqual(.3)
  expect(plus(123.456, 456.321)).toEqual(579.777)
})
test('minus', () => {
  expect(minus(1, 1)).toEqual(0)
  expect(minus(1.1, 1)).toEqual(.1)
  expect(minus(1.2, 1.2)).toEqual(0)
  expect(minus(1.02, 1.0001)).toEqual(.0199)
  expect(minus(1.0001, 1.02)).toEqual(-.0199)
  expect(minus(0.1, 0.2)).toEqual(-0.1)
  expect(minus(.2, .1)).toEqual(.1)
  expect(minus(123.456, 456.321)).toEqual(-332.865)
})
test('toFloor', () => {
  expect(toFloor(1.234, 2)).toEqual(1.23)
  expect(toFloor(1.239, 2)).toEqual(1.23)
  expect(toFloor(-1.239, 2)).toEqual(-1.24)
})

test('toCeil', () => {
  expect(toCeil(1.234, 2)).toEqual(1.24)
  expect(toCeil(1.239, 2)).toEqual(1.24)
  expect(toCeil(-1.239, 2)).toEqual(-1.23)
})

test('exactMath', () => {
  expect(exactMath('1+1')).toEqual(2)
  expect(exactMath('.1+.2')).toEqual(0.3)
  expect(exactMath('1.3*1.3')).toEqual(1.69)
})
