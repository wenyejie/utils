import bankCardFormat from '../bankCardFormat'

// 银行卡号
const CARD_NO = '6228481269040908170'

// 格式化的银行卡号
const FORMAT_CARD_NO = '6228 4812 6904 0908 170'

test('bankCardFormat---基础测试', () => {
  expect(bankCardFormat(CARD_NO)).toBe(FORMAT_CARD_NO)
})

test('bankCardFormat---空格测试', () => {
  expect(bankCardFormat(CARD_NO + '    ')).toBe(FORMAT_CARD_NO)
})
