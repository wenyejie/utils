import { getInfoByCardNO, CardNOResponse } from '../getInfoByCardNO'

test('getInfoByCardNO', () => {
  const CARDNO = '110101199003072391'
  const INFO: CardNOResponse = {
    province: '11',
    city: '01',
    area: '01',
    address: '110101',
    year: '1990',
    month: '03',
    day: '07',
    date: '19900307',
    sex: '女'
  }

  expect(getInfoByCardNO(CARDNO)).toEqual(INFO)
})
