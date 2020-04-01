import checkTaxpayerIDNO from '../checkTaxpayerIDNO'

test('checkTaxpayerIDNO---正确', () => {
  expect(checkTaxpayerIDNO('12500000450401805G')).toBeTruthy()
})
