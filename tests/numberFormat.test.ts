import { numberFormat } from '../src/moneyFormat'
import { expect, test } from 'vitest'

test('numberFormat', () => {
  expect(numberFormat(-1234567890.0987654321)).toEqual('-1,234,567,890.09')
  expect(numberFormat(-234567890.0987654321)).toEqual('-234,567,890.09')
  expect(numberFormat(0.02, { decimal: 3 })).toEqual('0.02')
  expect(numberFormat(0.02, { decimal: 3, padEnd: true })).toEqual('0.020')
  expect(numberFormat(54321.12345, { decimal: 4, type: 'ceil' })).toEqual('54,321.1235')
  expect(numberFormat(54321.12345, { decimal: 3, type: 'round' })).toEqual('54,321.123')
})
