import { expect, test } from 'vitest'
import { getInfoByCardNO } from '../src/getInfoByCardNO'

test('getInfoByCardNO', () => {
  const cardInfo = {
    province: '11',
    city: '01',
    area: '01',
    address: '110101',
    year: '2000',
    month: '07',
    day: '28',
    date: '20000728',
    sex: '2'
  }
  expect(getInfoByCardNO('110101200007287504')).toMatchObject(cardInfo)
  expect(getInfoByCardNO('')).toMatchObject({})
})
