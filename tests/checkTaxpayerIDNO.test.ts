import { expect, test } from 'vitest'
import checkTaxpayerIDNO from '../src/checkTaxpayerIDNO'

test('checkTaxpayerIDNO', () => {
  const IDNO = '91440300MA5F761U6W'

  expect(checkTaxpayerIDNO(IDNO)).toBeTruthy()
})
