import isEvenNumber from '../src/isEvenNumber'

test('isEvenNumber', () => {
  expect(isEvenNumber(0)).toBeTruthy()
  expect(isEvenNumber(2)).toBeTruthy()
  expect(isEvenNumber(1)).toBeFalsy()
})
