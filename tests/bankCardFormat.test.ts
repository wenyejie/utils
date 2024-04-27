import { expect, test } from 'vitest'
import { bankCardFormat } from '../src/bankCardFormat'

test('bankCardFormat', () => {
  const no = '6225985462112713'
  const formatNO = '6225 9854 6211 2713'
  expect(bankCardFormat(no)).toEqual(formatNO)

  // @ts-ignore
  expect(bankCardFormat()).toEqual('')
})
