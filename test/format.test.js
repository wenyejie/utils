import { moneyFormat } from '../src/format.js'
test('arrayUnique', () => {
  expect(moneyFormat(1000)).toStrictEqual('1,000.00')
})
