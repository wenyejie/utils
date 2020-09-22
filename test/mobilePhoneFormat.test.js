import mobilePhoneFormat from '../src/mobilePhoneFormat'

const mobileNO = '13412345678'

const mobileFormat = '134****5678'

test('mobilePhoneFormat', () => {
  expect(mobilePhoneFormat(mobileNO)).toBe(mobileFormat)
  expect(mobilePhoneFormat('')).toBe('')
  expect(mobilePhoneFormat(NaN)).toBe('')
  expect(mobilePhoneFormat('134')).toBe('')
})
