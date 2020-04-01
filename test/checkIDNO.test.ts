import checkIDNO from '../checkIDNO'

const cardNO = '110101199003071196'

test('checkIDNO---正确', () => {
  expect(checkIDNO(cardNO)).toBeTruthy()
})

test('checkIDNO---错误', () => {
  expect(checkIDNO('441424199003074994')).toBeFalsy()
})
