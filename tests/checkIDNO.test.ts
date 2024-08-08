import { expect, test } from 'vitest'
import { checkIDNO } from '../src/checkIDNO'

test('checkIDNO', () => {
  const cardNO = '110101199003071196'
  expect(checkIDNO(cardNO)).toBeTruthy()
  expect(checkIDNO('110101199013071196')).toBeFalsy()
})
